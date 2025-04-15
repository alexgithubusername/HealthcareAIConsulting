// Helper function to normalize cost for filtering
function normalizeCost(costString) {
    // Remove currency symbols, commas, and convert to number
    const numericCost = parseFloat(costString.replace(/[^0-9.]/g, ''));
    
    // Handle special cases
    if (costString.toLowerCase().includes('free')) {
        return 0;
    }
    
    // Handle ranges like "$399 for non-members, free for members"
    if (costString.toLowerCase().includes('free for members')) {
        return 0; // Consider the lowest cost option
    }
    
    return isNaN(numericCost) ? 0 : numericCost;
}

// Helper function to determine if a course is online, in-person, or hybrid
function getLocationType(durationString) {
    const lower = durationString.toLowerCase();
    
    if (lower.includes('campus') || lower.includes('in person')) {
        return 'inperson';
    } else if (lower.includes('online') && (lower.includes('campus') || lower.includes('in person'))) {
        return 'hybrid';
    } else {
        return 'online'; // Default to online if not specified
    }
}

// Helper function to categorize time commitment
function getTimeCommitment(durationString) {
    const lower = durationString.toLowerCase();
    
    // Short courses (under 10 hours)
    if (lower.includes('hour') || lower.includes('hr') || lower.includes('day')) {
        const hours = parseInt(lower.match(/(\d+)\s*(hour|hr)/i)?.[1] || '0');
        const days = parseInt(lower.match(/(\d+)\s*day/i)?.[1] || '0');
        
        if ((hours > 0 && hours < 10) || (days > 0 && days < 2)) {
            return 'short';
        }
    }
    
    // Long courses (over 4 weeks)
    if (lower.includes('month') || lower.includes('year') || lower.includes('semester')) {
        return 'long';
    }
    
    // Medium courses (everything else)
    return 'medium';
}

// Function to group similar keywords together
function groupSimilarKeywords(keywords) {
    // Define groups of similar concepts
    const conceptGroups = [
        // Prompting related
        ['prompt', 'prompting', 'prompts'],
        // Machine learning related
        ['machine learning', 'ml', 'model', 'models'],
        // Healthcare related
        ['healthcare', 'health care', 'health', 'medical', 'clinical'],
        // AI related
        ['ai', 'artificial intelligence'],
        // Data related
        ['data', 'analytics', 'analysis'],
        // Ethics related
        ['ethics', 'ethical', 'fairness', 'transparency'],
        // Implementation related
        ['implementation', 'implement', 'implementing'],
        // Integration related
        ['integration', 'integrate', 'integrating'],
    ];
    
    // Create a map to store the primary concept for each keyword
    const keywordToGroup = {};
    
    // Assign each keyword to its group
    conceptGroups.forEach(group => {
        const primaryConcept = group[0]; // Use the first keyword as the primary concept
        group.forEach(keyword => {
            keywordToGroup[keyword] = primaryConcept;
        });
    });
    
    // Group the keywords
    const groupedKeywords = new Map();
    keywords.forEach(keyword => {
        // Check if this keyword belongs to a group
        const primaryConcept = keywordToGroup[keyword] || keyword;
        
        // Add the keyword to its group
        if (!groupedKeywords.has(primaryConcept)) {
            groupedKeywords.set(primaryConcept, new Set());
        }
        groupedKeywords.get(primaryConcept).add(keyword);
    });
    
    // Convert the grouped keywords to an array of objects
    return Array.from(groupedKeywords.entries()).map(([primaryConcept, relatedKeywords]) => ({
        primaryConcept,
        relatedKeywords: Array.from(relatedKeywords)
    })).sort((a, b) => a.primaryConcept.localeCompare(b.primaryConcept));
}

// Function to get all unique keywords from all courses
function getAllKeywords() {
    const allKeywords = new Set();
    
    courses.forEach(course => {
        const keywords = extractKeywords(course.objectives);
        keywords.forEach(keyword => allKeywords.add(keyword));
    });
    
    return Array.from(allKeywords);
}

// Function to populate the keyword dropdown
function populateKeywordDropdown() {
    const keywords = getAllKeywords();
    const groupedKeywords = groupSimilarKeywords(keywords);
    const dropdown = document.getElementById('keywordDropdown');
    
    dropdown.innerHTML = groupedKeywords.map(group => `
        <div class="multiselect-option">
            <input type="checkbox" id="keyword-${group.primaryConcept}" value="${group.primaryConcept}" 
                   data-related="${group.relatedKeywords.join(',')}">
            <label for="keyword-${group.primaryConcept}">${group.primaryConcept}</label>
        </div>
    `).join('');
    
    // Add event listeners to checkboxes
    dropdown.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateSelectedKeywords();
        });
    });
}

// Function to update the selected keywords display
function updateSelectedKeywords() {
    const selectedContainer = document.getElementById('selectedKeywords');
    const checkboxes = document.querySelectorAll('#keywordDropdown input[type="checkbox"]:checked');
    
    selectedContainer.innerHTML = Array.from(checkboxes).map(checkbox => `
        <div class="selected-item" data-value="${checkbox.value}">
            ${checkbox.value}
            <span class="remove" data-value="${checkbox.value}">×</span>
        </div>
    `).join('');
    
    // Add event listeners to remove buttons
    selectedContainer.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            document.getElementById(`keyword-${value}`).checked = false;
            updateSelectedKeywords();
            updateDisplay();
        });
    });
    
    updateDisplay();
}

// Function to get selected keywords
function getSelectedKeywords() {
    return Array.from(document.querySelectorAll('#keywordDropdown input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
}

// Function to filter courses based on selected criteria
function filterCourses() {
    const costFilter = document.getElementById('costFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;
    const timeFilter = document.getElementById('timeFilter').value;
    const creditsFilter = document.getElementById('creditsFilter').value;
    const selectedKeywords = getSelectedKeywords();
    
    return courses.filter(course => {
        // Filter by cost
        const cost = normalizeCost(course.cost);
        if (costFilter === 'free' && cost !== 0) return false;
        if (costFilter === 'under100' && (cost === 0 || cost >= 100)) return false;
        if (costFilter === '100to1000' && (cost < 100 || cost > 1000)) return false;
        if (costFilter === '1000to5000' && (cost < 1000 || cost > 5000)) return false;
        if (costFilter === 'over5000' && cost <= 5000) return false;
        
        // Filter by location
        const locationType = getLocationType(course.duration);
        if (locationFilter !== 'all' && locationType !== locationFilter) return false;
        
        // Filter by time commitment
        const timeCommitment = getTimeCommitment(course.duration);
        if (timeFilter !== 'all' && timeCommitment !== timeFilter) return false;
        
        // Filter by CE credits
        const hasCECredits = course.ce.toLowerCase() === 'yes';
        if (creditsFilter === 'yes' && !hasCECredits) return false;
        if (creditsFilter === 'no' && hasCECredits) return false;
        
        // Filter by keywords
        if (selectedKeywords.length > 0) {
            const courseKeywords = extractKeywords(course.objectives);
            
            // Get all related keywords for the selected primary concepts
            const relatedKeywords = new Set();
            selectedKeywords.forEach(keyword => {
                const checkbox = document.getElementById(`keyword-${keyword}`);
                if (checkbox && checkbox.dataset.related) {
                    checkbox.dataset.related.split(',').forEach(related => {
                        relatedKeywords.add(related);
                    });
                } else {
                    relatedKeywords.add(keyword);
                }
            });
            
            // Check if the course has at least one of the related keywords
            if (!Array.from(relatedKeywords).some(keyword => courseKeywords.includes(keyword))) {
                return false;
            }
        }
        
        return true;
    });
}

// Function to extract keywords from objectives
function extractKeywords(text) {
    // Define meaningful concept categories with their related terms
    const conceptCategories = [
        {
            name: "AI & Machine Learning",
            terms: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'neural network', 'algorithm', 'model', 'models', 'generative ai', 'llm', 'large language model', 'cnn', 'convolutional neural network', 'rnn', 'recurrent neural network', 'computer vision']
        },
        {
            name: "Healthcare Applications",
            terms: ['healthcare', 'health care', 'medical', 'clinical', 'patient', 'diagnosis', 'treatment', 'health', 'medicine', 'hospital', 'physician', 'doctor', 'nurse', 'care', 'precision medicine', 'personalized medicine', 'diagnostic']
        },
        {
            name: "Data & Analytics",
            terms: ['data', 'analytics', 'analysis', 'big data', 'dataset', 'database', 'information', 'insight', 'insights', 'visualization', 'statistics', 'statistical', 'prediction', 'predictive']
        },
        {
            name: "Ethics & Governance",
            terms: ['ethics', 'ethical', 'regulation', 'regulatory', 'compliance', 'bias', 'fairness', 'transparency', 'privacy', 'security', 'governance', 'policy', 'policies', 'guideline', 'guidelines', 'standard', 'standards', 'law', 'laws', 'legal']
        },
        {
            name: "Implementation",
            terms: ['implementation', 'implement', 'implementing', 'deployment', 'deploy', 'deploying', 'integration', 'integrate', 'integrating', 'workflow', 'solution', 'solutions', 'application', 'applications', 'system', 'systems', 'tool', 'tools', 'platform', 'platforms']
        },
        {
            name: "Skills Development",
            terms: ['skill', 'skills', 'training', 'education', 'learning', 'certificate', 'certification', 'professional', 'career', 'development', 'knowledge', 'competency', 'competencies', 'capability', 'capabilities', 'expertise']
        },
        {
            name: "NLP & Text Processing",
            terms: ['nlp', 'natural language processing', 'text', 'language', 'linguistic', 'prompt', 'prompting', 'prompts', 'chat', 'chatbot', 'conversation', 'conversational', 'dialogue']
        },
        {
            name: "Decision Support",
            terms: ['decision', 'support', 'recommendation', 'recommendations', 'assist', 'assistance', 'augmentation', 'augment', 'enhance', 'enhancement', 'optimize', 'optimization', 'improve', 'improvement']
        }
    ];
    
    // Clean and tokenize the text
    const cleanText = text.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
        .replace(/\s{2,}/g, ' ');
    
    // Check for concept category matches
    const conceptMatches = {};
    
    conceptCategories.forEach(category => {
        // Count how many terms from this category appear in the text
        let matchCount = 0;
        let matchedTerms = new Set();
        
        category.terms.forEach(term => {
            if (cleanText.includes(term)) {
                matchCount++;
                matchedTerms.add(term);
            }
        });
        
        if (matchCount > 0) {
            conceptMatches[category.name] = {
                count: matchCount,
                terms: Array.from(matchedTerms)
            };
        }
    });
    
    // Sort categories by match count and get top 5
    const topConcepts = Object.entries(conceptMatches)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 5)
        .map(entry => entry[0]);
    
    return topConcepts;
}

// Function to highlight keywords in text
function highlightKeywords(text, keywords) {
    let highlightedText = text;
    
    keywords.forEach(keyword => {
        // Create a regex that matches the keyword as a whole word, case insensitive
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        highlightedText = highlightedText.replace(regex, match => `<strong>${match}</strong>`);
    });
    
    return highlightedText;
}

// Function to convert audience to shorthand
function convertAudienceToShorthand(audience) {
    const shorthandMap = {
        'medical students': 'MS',
        'medical student': 'MS',
        'residents': 'Res',
        'resident': 'Res',
        'fellows': 'Fellow',
        'physicians': 'MD/DO',
        'practicing physicians': 'MD/DO',
        'doctors': 'MD/DO',
        'clinicians': 'Clin',
        'nurses': 'RN',
        'registered nurses': 'RN',
        'advanced practice providers': 'APP',
        'physician assistants': 'PA',
        'nurse practitioners': 'NP',
        'faculty': 'Fac',
        'administrators': 'Admin',
        'technologists': 'Tech',
        'policymakers': 'Policy',
        'policy makers': 'Policy',
        'business professionals': 'Bus',
        'data scientists': 'Data Sci',
        'software engineers': 'SW Eng',
        'general public': 'Public',
        'healthcare professionals': 'HC Prof',
        'health industry professionals': 'HC Prof',
        'health care professionals': 'HC Prof',
        'health informatics': 'Health Info',
        'executives': 'Exec',
        'managers': 'Mgmt',
        'senior managers': 'Sr Mgmt',
        'students': 'Stud',
        'developers': 'Dev',
        'ai practitioners': 'AI Pract',
        'professionals': 'Prof'
    };
    
    // Convert the audience string to lowercase for case-insensitive matching
    const lowerAudience = audience.toLowerCase();
    
    // Check for matches in the shorthand map
    let shorthand = [];
    for (const [key, value] of Object.entries(shorthandMap)) {
        if (lowerAudience.includes(key)) {
            shorthand.push(value);
        }
    }
    
    // If no matches found, return the original audience string without truncation
    if (shorthand.length === 0) {
        return audience;
    }
    
    // Return unique shorthand terms joined by commas
    return [...new Set(shorthand)].join(', ');
}

function createCourseCard(course) {
    // Clean course title by removing " - Trainees and Health Staff" (case-insensitive)
    const cleanedTitle = course.title.replace(/\s*-\s*Trainees\s+and\s+Health\s+Staff/i, '');
    // Extract keywords from objectives
    const keywords = extractKeywords(course.objectives);
    
    // Highlight keywords in objectives
    const highlightedObjectives = highlightKeywords(course.objectives, keywords);
    
    // Convert audience to shorthand
    const shorthandAudience = convertAudienceToShorthand(course.audience);
    
    return `
    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                <div class="card-body">
                    <h3 class="card-title">${cleanedTitle}</h3>
                    <div style="display: flex; justify-content: space-between;">
                        <p style="margin-right: 10px;"><strong>Sponsor:</strong> ${course.sponsor}</p>
                        <p><strong>Duration:</strong> ${course.duration}</p>
                    </div>
                    <p><strong>Audience:</strong> ${shorthandAudience}</p>
                    <div style="display: flex; justify-content: space-between;">
                        <p style="margin-right: 10px;"><strong>Cost:</strong> ${course.cost}</p>
                        <p><strong>CE Credit:</strong> ${course.ce}</p>
                    </div>
                    <div class="keywords">
                        ${keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                    </div>
                </div>
                <a href="${course.link}" target="_blank" class="card-link">Learn More</a>
            </div>
            <div class="card-back">
                <h3 class="card-title sticky-title">${cleanedTitle}</h3>
                <div class="card-body">
                    <p><strong>Objectives:</strong></p>
                    <p>${highlightedObjectives}</p>
                </div>
                <a href="${course.link}" target="_blank" class="card-link">Learn More</a>
            </div>
        </div>
    </div>`;
}

// Function to update the display with filtered courses
function updateDisplay() {
    const filteredCourses = filterCourses();
    const container = document.getElementById('courseContainer');
    const resultsCount = document.getElementById('resultsCount');
    
    // Update results count
    resultsCount.textContent = `Showing ${filteredCourses.length} of ${courses.length} courses`;
    
    // Update course cards
    container.innerHTML = filteredCourses.map(createCourseCard).join('');
}

// Initialize the display
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    document.getElementById('applyFilters').addEventListener('click', updateDisplay);
    
    document.getElementById('resetFilters').addEventListener('click', function() {
        document.getElementById('costFilter').value = 'all';
        document.getElementById('locationFilter').value = 'all';
        document.getElementById('timeFilter').value = 'all';
        document.getElementById('creditsFilter').value = 'all';
        
        // Clear keyword selections
        document.querySelectorAll('#keywordDropdown input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        updateSelectedKeywords();
        
        updateDisplay();
    });
    
    // Set up multiselect dropdown
    const keywordFilter = document.getElementById('keywordFilter');
    
    // Toggle dropdown on click
    keywordFilter.addEventListener('click', function(event) {
        // Don't toggle if clicking on a checkbox or remove button
        if (event.target.tagName === 'INPUT' || event.target.classList.contains('remove')) {
            return;
        }
        
        this.classList.toggle('active');
        
        // Close dropdown when clicking outside
        if (this.classList.contains('active')) {
            document.addEventListener('click', function closeDropdown(e) {
                if (!keywordFilter.contains(e.target)) {
                    keywordFilter.classList.remove('active');
                    document.removeEventListener('click', closeDropdown);
                }
            });
        }
    });
    
    // Populate keyword dropdown
    populateKeywordDropdown();
    
    // Display results count
    const resultsCount = document.getElementById('resultsCount');
    resultsCount.textContent = `Showing ${courses.length} of ${courses.length} courses`;
    
    // Initial display - show all courses
    const container = document.getElementById('courseContainer');
    container.innerHTML = courses.map(createCourseCard).join('');
});
