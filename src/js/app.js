/* ============================================
   FootballVerse - Main Application Script
   Modern Football Social Media Platform
   ============================================ */

// ============================================
// Mock Data
// ============================================

const mockPosts = [
    {
        id: 1,
        author: "Cristiano Ronaldo",
        handle: "@cristiano",
        avatar: "https://via.placeholder.com/40?text=CR7",
        image: "https://via.placeholder.com/400x500?text=Cristiano+Ronaldo",
        caption: "Training session with the team! Preparing for the match this weekend 🔥",
        category: "wallpapers",
        date: "2 hours ago",
        likes: 15420,
        comments: 892,
        saves: 3450,
        shares: 1200,
        liked: false,
        saved: false
    },
    {
        id: 2,
        author: "Manchester United",
        handle: "@ManUtd",
        avatar: "https://via.placeholder.com/40?text=MUFC",
        image: "https://via.placeholder.com/400x500?text=Manchester+United+Kit",
        caption: "New season kit 2024/25 🔴 Who's excited? #MUFC",
        category: "kits",
        date: "4 hours ago",
        likes: 28340,
        comments: 1520,
        saves: 5600,
        shares: 2100,
        liked: false,
        saved: false
    },
    {
        id: 3,
        author: "Football Goals",
        handle: "@FootballGoals",
        avatar: "https://via.placeholder.com/40?text=Goals",
        image: "https://via.placeholder.com/400x500?text=Amazing+Boots+Collection",
        caption: "Which boots would you wear? Premium Nike Phantom vs Adidas Predator 👟",
        category: "boots",
        date: "6 hours ago",
        likes: 19850,
        comments: 2340,
        saves: 4120,
        shares: 890,
        liked: false,
        saved: false
    },
    {
        id: 4,
        author: "Tactical Genius",
        handle: "@TacticalAnalysis",
        avatar: "https://via.placeholder.com/40?text=TA",
        image: "https://via.placeholder.com/400x500?text=4-3-3+Formation",
        caption: "Breaking down the 4-3-3 formation: Best for modern football 📋",
        category: "tactics",
        date: "8 hours ago",
        likes: 12650,
        comments: 1890,
        saves: 3450,
        shares: 560,
        liked: false,
        saved: false
    },
    {
        id: 5,
        author: "Stadium Vibes",
        handle: "@StadiumVibes",
        avatar: "https://via.placeholder.com/40?text=SV",
        image: "https://via.placeholder.com/400x500?text=Old+Trafford",
        caption: "Old Trafford under the lights 🏟️ Theater of Dreams ✨",
        category: "stadiums",
        date: "10 hours ago",
        likes: 24580,
        comments: 1650,
        saves: 5890,
        shares: 1450,
        liked: false,
        saved: false
    },
    {
        id: 6,
        author: "Football Edits",
        handle: "@FootballEdits",
        avatar: "https://via.placeholder.com/40?text=FE",
        image: "https://via.placeholder.com/400x500?text=Skills+Edit+4K",
        caption: "Skills edit: Messi's legendary dribbles 🎬 #Football",
        category: "edits",
        date: "12 hours ago",
        likes: 31200,
        comments: 2100,
        saves: 6740,
        shares: 2340,
        liked: false,
        saved: false
    },
    {
        id: 7,
        author: "Football Memes",
        handle: "@FootballMemes",
        avatar: "https://via.placeholder.com/40?text=FM",
        image: "https://via.placeholder.com/400x500?text=Funny+Football+Meme",
        caption: "When your team concedes in the 90th minute 😭🤦",
        category: "memes",
        date: "14 hours ago",
        likes: 42100,
        comments: 3250,
        saves: 7890,
        shares: 3100,
        liked: false,
        saved: false
    },
    {
        id: 8,
        author: "Lionel Messi",
        handle: "@leomessi",
        avatar: "https://via.placeholder.com/40?text=Messi",
        image: "https://via.placeholder.com/400x500?text=Messi+Wallpaper",
        caption: "Beautiful day for football ⚽ #LaLiga",
        category: "wallpapers",
        date: "16 hours ago",
        likes: 52340,
        comments: 4100,
        saves: 8920,
        shares: 3890,
        liked: false,
        saved: false
    }
];

const trendingUsers = [
    { id: 1, name: "Erling Haaland", handle: "@haaland", avatar: "https://via.placeholder.com/40?text=Haaland", following: false },
    { id: 2, name: "Kylian Mbappé", handle: "@mbappe", avatar: "https://via.placeholder.com/40?text=Mbappe", following: false },
    { id: 3, name: "Vinícius Jr", handle: "@vinijr", avatar: "https://via.placeholder.com/40?text=Vini", following: false },
    { id: 4, name: "Jude Bellingham", handle: "@judebell", avatar: "https://via.placeholder.com/40?text=Jude", following: false },
    { id: 5, name: "Phil Foden", handle: "@philfoden", avatar: "https://via.placeholder.com/40?text=Foden", following: false }
];

const recommendedUsers = [
    { id: 6, name: "Arsenal FC", handle: "@Arsenal", avatar: "https://via.placeholder.com/40?text=AFC", following: false },
    { id: 7, name: "Liverpool FC", handle: "@LiverpoolFC", avatar: "https://via.placeholder.com/40?text=LFC", following: false },
    { id: 8, name: "Manchester City", handle: "@ManCity", avatar: "https://via.placeholder.com/40?text=MCFC", following: false }
];

const trendingLeagues = [
    { id: 1, name: "Premier League", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", posts: "284.5K" },
    { id: 2, name: "La Liga", emoji: "🇪🇸", posts: "156.3K" },
    { id: 3, name: "Serie A", emoji: "🇮🇹", posts: "142.8K" },
    { id: 4, name: "Bundesliga", emoji: "🇩🇪", posts: "98.7K" }
];

// ============================================
// Global State
// ============================================

let appState = {
    isLoggedIn: localStorage.getItem('footballVerseUser') !== null,
    currentUser: localStorage.getItem('footballVerseUser') ? JSON.parse(localStorage.getItem('footballVerseUser')) : null,
    posts: [...mockPosts],
    currentFilter: 'all',
    page: 1,
    postsPerPage: 8
};

// ============================================
// Utility Functions
// ============================================

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconMap = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${iconMap[type]}</span>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Format numbers for display
 */
function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
}

/**
 * Filter posts by category
 */
function filterPostsByCategory(category) {
    appState.currentFilter = category;
    appState.page = 1;
    
    if (category === 'all' || category === 'trending') {
        return appState.posts;
    }
    
    return appState.posts.filter(post => post.category === category);
}

/**
 * Get paginated posts
 */
function getPaginatedPosts() {
    const filtered = filterPostsByCategory(appState.currentFilter);
    const startIndex = (appState.page - 1) * appState.postsPerPage;
    const endIndex = startIndex + appState.postsPerPage;
    return filtered.slice(startIndex, endIndex);
}

/**
 * Toggle modal
 */
function toggleModal(modalId, show = true) {
    const modal = document.getElementById(modalId);
    if (show) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// UI Rendering Functions
// ============================================

/**
 * Render post card
 */
function renderPostCard(post) {
    return `
        <div class="post-card" data-post-id="${post.id}">
            <img src="${post.image}" alt="${post.caption}" class="post-image">
            <div class="post-content">
                <div class="post-header">
                    <img src="${post.avatar}" alt="${post.author}" class="post-avatar">
                    <div class="post-author-info">
                        <div class="post-author">${post.author}</div>
                        <div class="post-date">${post.date}</div>
                    </div>
                </div>
                
                <span class="post-category">${post.category}</span>
                
                <p class="post-caption">${post.caption}</p>
                
                <div class="post-stats">
                    <div class="stat">
                        <span>❤️</span>
                        <span>${formatNumber(post.likes)}</span>
                    </div>
                    <div class="stat">
                        <span>💬</span>
                        <span>${formatNumber(post.comments)}</span>
                    </div>
                    <div class="stat">
                        <span>🔖</span>
                        <span>${formatNumber(post.saves)}</span>
                    </div>
                </div>
                
                <div class="post-actions">
                    <button class="action-btn like-btn ${post.liked ? 'active' : ''}" title="Like this post">
                        <svg viewBox="0 0 24 24" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        Like
                    </button>
                    <button class="action-btn comment-btn" title="Comment on this post">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Comment
                    </button>
                    <button class="action-btn save-btn ${post.saved ? 'active' : ''}" title="Save this post">
                        <svg viewBox="0 0 24 24" fill="${post.saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        </svg>
                        Save
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render posts grid
 */
function renderPostsGrid() {
    const grid = document.getElementById('postsGrid');
    const posts = getPaginatedPosts();
    
    if (posts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #666;">
                <h3>No posts found in this category</h3>
                <p>Be the first to upload football content! 🏈</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = posts.map(renderPostCard).join('');
    
    // Add event listeners to post cards
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', handlePostClick);
        card.querySelector('.like-btn').addEventListener('click', handleLike);
        card.querySelector('.comment-btn').addEventListener('click', handleComment);
        card.querySelector('.save-btn').addEventListener('click', handleSave);
    });
    
    // Show/hide load more button
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const filtered = filterPostsByCategory(appState.currentFilter);
    if (filtered.length > appState.page * appState.postsPerPage) {
        loadMoreContainer.style.display = 'block';
    } else {
        loadMoreContainer.style.display = 'none';
    }
}

/**
 * Render trending users
 */
function renderTrendingUsers() {
    const container = document.getElementById('trendingUsers');
    container.innerHTML = trendingUsers.map(user => `
        <div class="user-card">
            <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-handle">${user.handle}</div>
            </div>
            <button class="follow-btn ${user.following ? 'following' : ''}" data-user-id="${user.id}">
                ${user.following ? 'Following' : 'Follow'}
            </button>
        </div>
    `).join('');
    
    container.querySelectorAll('.follow-btn').forEach(btn => {
        btn.addEventListener('click', handleFollow);
    });
}

/**
 * Render recommended users
 */
function renderRecommendedUsers() {
    const container = document.getElementById('recommendedUsers');
    container.innerHTML = recommendedUsers.map(user => `
        <div class="user-card">
            <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-handle">${user.handle}</div>
            </div>
            <button class="follow-btn ${user.following ? 'following' : ''}" data-user-id="${user.id}">
                ${user.following ? 'Following' : 'Follow'}
            </button>
        </div>
    `).join('');
    
    container.querySelectorAll('.follow-btn').forEach(btn => {
        btn.addEventListener('click', handleFollow);
    });
}

/**
 * Render trending leagues
 */
function renderTrendingLeagues() {
    const container = document.getElementById('trendingLeagues');
    container.innerHTML = trendingLeagues.map(league => `
        <div class="league-card">
            <div class="league-badge">${league.emoji}</div>
            <div class="league-info">
                <div class="league-name">${league.name}</div>
                <div class="league-posts">${league.posts} posts</div>
            </div>
        </div>
    `).join('');
}

/**
 * Update UI based on login state
 */
function updateAuthUI() {
    const createPostCard = document.getElementById('createPostCard');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const authBtn = document.querySelector('[data-user-id]') ? null : document.getElementById('authBtn');
    
    if (appState.isLoggedIn) {
        createPostCard.style.display = 'block';
        welcomeMessage.style.display = 'none';
        if (authBtn) {
            authBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span class="nav-label">Profile</span>
            `;
        }
    } else {
        createPostCard.style.display = 'none';
        welcomeMessage.style.display = 'block';
        if (authBtn) {
            authBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
                </svg>
                <span class="nav-label">Sign In</span>
            `;
        }
    }
}

// ============================================
// Event Handlers
// ============================================

/**
 * Handle post click
 */
function handlePostClick(e) {
    if (e.target.closest('button')) return;
    
    const postId = parseInt(e.currentTarget.dataset.postId);
    const post = appState.posts.find(p => p.id === postId);
    
    if (post) {
        showPostModal(post);
    }
}

/**
 * Show post modal with details
 */
function showPostModal(post) {
    const modal = document.getElementById('postModal');
    const modalBody = document.getElementById('postModalBody');
    
    modalBody.innerHTML = `
        <img src="${post.image}" alt="${post.caption}" class="post-modal-image">
        <div class="post-modal-details">
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.author}" class="post-avatar">
                <div class="post-author-info">
                    <div class="post-author">${post.author}</div>
                    <div class="post-date">${post.date}</div>
                </div>
            </div>
            
            <div>
                <span class="post-category">${post.category}</span>
            </div>
            
            <p class="post-caption" style="font-size: 1rem;">${post.caption}</p>
            
            <div class="post-stats" style="margin: 1rem 0;">
                <div class="stat">
                    <span>❤️</span>
                    <span>${formatNumber(post.likes)}</span>
                </div>
                <div class="stat">
                    <span>💬</span>
                    <span>${formatNumber(post.comments)}</span>
                </div>
                <div class="stat">
                    <span>🔖</span>
                    <span>${formatNumber(post.saves)}</span>
                </div>
                <div class="stat">
                    <span>📤</span>
                    <span>${formatNumber(post.shares)}</span>
                </div>
            </div>
            
            <div class="post-actions" style="margin: 1rem 0;">
                <button class="action-btn like-btn ${post.liked ? 'active' : ''}">
                    <svg viewBox="0 0 24 24" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Like
                </button>
                <button class="action-btn comment-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Comment
                </button>
                <button class="action-btn save-btn ${post.saved ? 'active' : ''}">
                    <svg viewBox="0 0 24 24" fill="${post.saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    </svg>
                    Save
                </button>
            </div>
            
            <div class="post-comments">
                <h4 style="color: #ffd700; margin-bottom: 1rem;">Comments</h4>
                <div class="comment">
                    <img src="https://via.placeholder.com/32?text=User1" alt="User 1" class="comment-avatar">
                    <div class="comment-content">
                        <div class="comment-author">Football Fan</div>
                        <div class="comment-text">Amazing post! 🔥 Can't wait for the next match!</div>
                        <div class="comment-actions">
                            <button>Like</button>
                            <button>Reply</button>
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <img src="https://via.placeholder.com/32?text=User2" alt="User 2" class="comment-avatar">
                    <div class="comment-content">
                        <div class="comment-author">Sports Enthusiast</div>
                        <div class="comment-text">Incredible skills on display here! Love the content quality.</div>
                        <div class="comment-actions">
                            <button>Like</button>
                            <button>Reply</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="comment-form">
                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
            </div>
        </div>
    `;
    
    toggleModal('postModal', true);
}

/**
 * Handle like button click
 */
function handleLike(e) {
    e.stopPropagation();
    
    if (!appState.isLoggedIn) {
        showToast('Please sign in to like posts', 'info');
        toggleModal('authModal', true);
        return;
    }
    
    const postCard = e.currentTarget.closest('.post-card');
    const postId = parseInt(postCard.dataset.postId);
    const post = appState.posts.find(p => p.id === postId);
    
    if (post) {
        post.liked = !post.liked;
        if (post.liked) {
            post.likes += 1;
            showToast('Post liked! ❤️', 'success');
        } else {
            post.likes -= 1;
        }
        e.currentTarget.classList.toggle('active');
    }
}

/**
 * Handle comment button click
 */
function handleComment(e) {
    e.stopPropagation();
    
    if (!appState.isLoggedIn) {
        showToast('Please sign in to comment', 'info');
        toggleModal('authModal', true);
        return;
    }
    
    showToast('Comment feature coming soon!', 'info');
}

/**
 * Handle save button click
 */
function handleSave(e) {
    e.stopPropagation();
    
    if (!appState.isLoggedIn) {
        showToast('Please sign in to save posts', 'info');
        toggleModal('authModal', true);
        return;
    }
    
    const postCard = e.currentTarget.closest('.post-card');
    const postId = parseInt(postCard.dataset.postId);
    const post = appState.posts.find(p => p.id === postId);
    
    if (post) {
        post.saved = !post.saved;
        if (post.saved) {
            post.saves += 1;
            showToast('Post saved! 🔖', 'success');
        } else {
            post.saves -= 1;
        }
        e.currentTarget.classList.toggle('active');
    }
}

/**
 * Handle follow button click
 */
function handleFollow(e) {
    e.stopPropagation();
    
    if (!appState.isLoggedIn) {
        showToast('Please sign in to follow users', 'info');
        toggleModal('authModal', true);
        return;
    }
    
    const userId = parseInt(e.currentTarget.dataset.userId);
    const allUsers = [...trendingUsers, ...recommendedUsers];
    const user = allUsers.find(u => u.id === userId);
    
    if (user) {
        user.following = !user.following;
        e.currentTarget.textContent = user.following ? 'Following' : 'Follow';
        e.currentTarget.classList.toggle('following');
        showToast(`${user.following ? 'Following' : 'Unfollowed'} ${user.name}`, 'success');
    }
}

/**
 * Handle category filter
 */
function handleCategoryFilter(e) {
    const category = e.currentTarget.dataset.category;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    appState.currentFilter = category;
    appState.page = 1;
    renderPostsGrid();
}

/**
 * Handle search
 */
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (query.length === 0) {
        renderPostsGrid();
        return;
    }
    
    const filtered = appState.posts.filter(post => 
        post.caption.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
    );
    
    const grid = document.getElementById('postsGrid');
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #666;">
                <h3>No results found for "${query}"</h3>
            </div>
        `;
    } else {
        grid.innerHTML = filtered.slice(0, appState.postsPerPage).map(renderPostCard).join('');
        document.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', handlePostClick);
        });
    }
}

/**
 * Handle load more
 */
function handleLoadMore() {
    appState.page += 1;
    renderPostsGrid();
}

/**
 * Handle auth form submission
 */
function handleAuthSubmit(e) {
    e.preventDefault();
    
    const isSignup = document.getElementById('signupForm').style.display !== 'none';
    
    if (isSignup) {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        if (password !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }
        
        appState.currentUser = {
            id: Date.now(),
            name: name,
            email: email,
            avatar: `https://via.placeholder.com/40?text=${name[0]}`
        };
        
        showToast(`Welcome ${name}! Your account has been created.`, 'success');
    } else {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        appState.currentUser = {
            id: Date.now(),
            name: email.split('@')[0],
            email: email,
            avatar: `https://via.placeholder.com/40?text=${email[0]}`
        };
        
        showToast(`Welcome back!`, 'success');
    }
    
    appState.isLoggedIn = true;
    localStorage.setItem('footballVerseUser', JSON.stringify(appState.currentUser));
    
    toggleModal('authModal', false);
    updateAuthUI();
    renderPostsGrid();
}

/**
 * Handle upload form submission
 */
function handleUploadSubmit(e) {
    e.preventDefault();
    
    const category = document.getElementById('categorySelect').value;
    const caption = document.getElementById('postCaption').value;
    
    if (!category || !caption) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    const newPost = {
        id: appState.posts.length + 1,
        author: appState.currentUser.name,
        handle: '@' + appState.currentUser.name.toLowerCase(),
        avatar: appState.currentUser.avatar,
        image: document.getElementById('imagePreview').querySelector('img')?.src || 'https://via.placeholder.com/400x500?text=Football',
        caption: caption,
        category: category,
        date: 'Just now',
        likes: 0,
        comments: 0,
        saves: 0,
        shares: 0,
        liked: false,
        saved: false
    };
    
    appState.posts.unshift(newPost);
    appState.page = 1;
    
    showToast('Post published successfully! 🎉', 'success');
    toggleModal('uploadModal', false);
    document.getElementById('uploadForm').reset();
    document.getElementById('imagePreview').classList.remove('active');
    renderPostsGrid();
}

/**
 * Handle image upload
 */
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
        preview.classList.add('active');
    };
    reader.readAsDataURL(file);
}

/**
 * Handle auth toggle
 */
function handleAuthToggle(e) {
    e.preventDefault();
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authModalTitle = document.getElementById('authModalTitle');
    const authToggleText = document.getElementById('authToggleText');
    const authToggleBtn = document.getElementById('authToggleBtn');
    
    if (loginForm.style.display !== 'none') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        authModalTitle.textContent = 'Create Account';
        authToggleText.textContent = 'Already have an account? ';
        authToggleBtn.textContent = 'Sign In';
    } else {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        authModalTitle.textContent = 'Sign In';
        authToggleText.textContent = "Don't have an account? ";
        authToggleBtn.textContent = 'Sign Up';
    }
}

// ============================================
// Initialize Application
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Render initial UI
    renderPostsGrid();
    renderTrendingUsers();
    renderRecommendedUsers();
    renderTrendingLeagues();
    updateAuthUI();
    
    // Category filter
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Load more
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', handleLoadMore);
    
    // Auth modal
    const authBtn = document.getElementById('authBtn');
    const signInBtn = document.getElementById('signInBtn');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const authForm = document.getElementById('authForm');
    const authToggleBtn = document.getElementById('authToggleBtn');
    
    authBtn.addEventListener('click', () => toggleModal('authModal', true));
    signInBtn.addEventListener('click', () => toggleModal('authModal', true));
    closeAuthModal.addEventListener('click', () => toggleModal('authModal', false));
    authForm.addEventListener('submit', handleAuthSubmit);
    authToggleBtn.addEventListener('click', handleAuthToggle);
    
    // Upload modal
    const openUploadModal = document.getElementById('openUploadModal');
    const closeUploadModal = document.getElementById('closeUploadModal');
    const cancelUploadBtn = document.getElementById('cancelUploadBtn');
    const uploadForm = document.getElementById('uploadForm');
    const imageUpload = document.getElementById('imageUpload');
    
    openUploadModal.addEventListener('click', () => toggleModal('uploadModal', true));
    closeUploadModal.addEventListener('click', () => toggleModal('uploadModal', false));
    cancelUploadBtn.addEventListener('click', () => toggleModal('uploadModal', false));
    uploadForm.addEventListener('submit', handleUploadSubmit);
    imageUpload.addEventListener('change', handleImageUpload);
    
    // Post modal
    const closePostModal = document.getElementById('closePostModal');
    closePostModal.addEventListener('click', () => toggleModal('postModal', false));
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                toggleModal(modal.id, false);
            }
        });
    });
    
    // Show initial toast
    showToast('Welcome to FootballVerse! 🏈', 'info');
});
