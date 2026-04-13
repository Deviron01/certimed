// Advanced CertMed Medicine Authentication System
// Production-ready JavaScript with advanced features

// Global Configuration
const CONFIG = {
    API_ENDPOINT: 'https://api.certmed.com/v1',
    DEMO_MODE: true,
    ANIMATION_DURATION: 300,
    TOAST_DURATION: 5000,
    SESSION_TIMEOUT: 3600000, // 1 hour
    MAX_UPLOAD_SIZE: 5 * 1024 * 1024, // 5MB
    SUPPORTED_FORMATS: ['jpg', 'jpeg', 'png', 'webp']
};

// Advanced Product Database with Extended Features
const productDatabase = [
    {
        id: 'QR_MED001_BATCH2024001',
        name: 'Paracetamol 500mg',
        manufacturer: 'MediCorp Pharmaceuticals',
        manufacturerId: 'MCP001',
        expiryDate: '2025-12-31',
        batchNumber: 'BATCH2024001',
        verified: true,
        qrCode: 'QR_MED001_BATCH2024001',
        category: 'Pain Relief',
        dosage: '500mg',
        form: 'Tablet',
        prescriptionRequired: false,
        sideEffects: ['Nausea', 'Headache', 'Dizziness'],
        contraindications: ['Liver disease', 'Alcohol abuse'],
        storageConditions: 'Store at room temperature below 25°C',
        regulatoryApproval: 'FDA Approved',
        manufacturedDate: '2024-01-15',
        distributor: 'MediSupply Inc',
        trackingHistory: [
            { date: '2024-01-15', location: 'Manufacturing Facility', status: 'Produced' },
            { date: '2024-01-20', location: 'Distribution Center', status: 'Shipped' },
            { date: '2024-01-25', location: 'Pharmacy', status: 'Received' }
        ],
        blockchainHash: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        nfcEnabled: true
    },
    {
        id: 'QR_MED002_BATCH2024002',
        name: 'Amoxicillin 250mg',
        manufacturer: 'HealthPharma Ltd',
        manufacturerId: 'HPL002',
        expiryDate: '2026-06-30',
        batchNumber: 'BATCH2024002',
        verified: true,
        qrCode: 'QR_MED002_BATCH2024002',
        category: 'Antibiotics',
        dosage: '250mg',
        form: 'Capsule',
        prescriptionRequired: true,
        sideEffects: ['Diarrhea', 'Nausea', 'Rash'],
        contraindications: ['Penicillin allergy', 'Mononucleosis'],
        storageConditions: 'Store at room temperature, protect from moisture',
        regulatoryApproval: 'EMA Approved',
        manufacturedDate: '2024-02-10',
        distributor: 'HealthSupply Co',
        trackingHistory: [
            { date: '2024-02-10', location: 'Manufacturing Facility', status: 'Produced' },
            { date: '2024-02-15', location: 'Quality Control', status: 'Inspected' },
            { date: '2024-02-20', location: 'Distribution Center', status: 'Shipped' }
        ],
        blockchainHash: '0x842d35Cc6634C0532925a3b844Bc454e4438f44f',
        nfcEnabled: true
    },
    {
        id: 'QR_MED003_BATCH2024003',
        name: 'Ibuprofen 400mg',
        manufacturer: 'BioMed Solutions',
        manufacturerId: 'BMS003',
        expiryDate: '2025-09-30',
        batchNumber: 'BATCH2024003',
        verified: false,
        qrCode: 'QR_MED003_BATCH2024003',
        category: 'Pain Relief',
        dosage: '400mg',
        form: 'Tablet',
        prescriptionRequired: false,
        sideEffects: ['Stomach upset', 'Headache', 'Dizziness'],
        contraindications: ['Stomach ulcers', 'Kidney disease', 'Pregnancy (3rd trimester)'],
        storageConditions: 'Store at room temperature, protect from light',
        regulatoryApproval: 'FDA Approved',
        manufacturedDate: '2024-03-01',
        distributor: 'BioSupply Ltd',
        trackingHistory: [
            { date: '2024-03-01', location: 'Manufacturing Facility', status: 'Produced' },
            { date: '2024-03-05', location: 'Distribution Center', status: 'Shipped' }
        ],
        blockchainHash: '0x952d35Cc6634C0532925a3b844Bc454e4438f450',
        nfcEnabled: false,
        alertReason: 'Potential counterfeit detected in batch testing'
    },
    {
        id: 'QR_MED004_BATCH2024004',
        name: 'Aspirin 100mg',
        manufacturer: 'Global Pharma Inc',
        manufacturerId: 'GPI004',
        expiryDate: '2024-12-31',
        batchNumber: 'BATCH2024004',
        verified: true,
        qrCode: 'QR_MED004_BATCH2024004',
        category: 'Pain Relief',
        dosage: '100mg',
        form: 'Tablet',
        prescriptionRequired: false,
        sideEffects: ['Stomach irritation', 'Bleeding', 'Tinnitus'],
        contraindications: ['Bleeding disorders', 'Asthma', 'Pregnancy'],
        storageConditions: 'Store at room temperature, keep dry',
        regulatoryApproval: 'WHO Prequalified',
        manufacturedDate: '2024-01-05',
        distributor: 'GlobalMed Supply',
        trackingHistory: [
            { date: '2024-01-05', location: 'Manufacturing Facility', status: 'Produced' },
            { date: '2024-01-10', location: 'Distribution Center', status: 'Shipped' },
            { date: '2024-01-15', location: 'Hospital', status: 'Received' }
        ],
        blockchainHash: '0xa62d35Cc6634C0532925a3b844Bc454e4438f451',
        nfcEnabled: true
    },
    {
        id: 'QR_MED005_BATCH2024005',
        name: 'Vitamin D3 1000IU',
        manufacturer: 'NutriHealth Labs',
        manufacturerId: 'NHL005',
        expiryDate: '2027-03-31',
        batchNumber: 'BATCH2024005',
        verified: true,
        qrCode: 'QR_MED005_BATCH2024005',
        category: 'Vitamins',
        dosage: '1000IU',
        form: 'Softgel',
        prescriptionRequired: false,
        sideEffects: ['Hypercalcemia (rare)', 'Nausea'],
        contraindications: ['Hypercalcemia', 'Kidney stones'],
        storageConditions: 'Store at room temperature, protect from heat',
        regulatoryApproval: 'FDA Approved',
        manufacturedDate: '2024-04-01',
        distributor: 'NutriSupply Inc',
        trackingHistory: [
            { date: '2024-04-01', location: 'Manufacturing Facility', status: 'Produced' },
            { date: '2024-04-05', location: 'Distribution Center', status: 'Shipped' },
            { date: '2024-04-10', location: 'Retail Store', status: 'Received' }
        ],
        blockchainHash: '0xb72d35Cc6634C0532925a3b844Bc454e4438f452',
        nfcEnabled: true
    }
];

// Advanced State Management
class AppState {
    constructor() {
        this.user = null;
        this.isLoggedIn = false;
        this.currentVerification = null;
        this.scannerActive = false;
        this.sessionTimer = null;
        this.notifications = [];
        this.recentVerifications = [];
        this.settings = {
            darkMode: false,
            notifications: true,
            autoLogout: true,
            language: 'en'
        };
        this.loadState();
    }

    loadState() {
        const savedState = localStorage.getItem('certmed_state');
        if (savedState) {
            const state = JSON.parse(savedState);
            Object.assign(this, state);
        }
    }

    saveState() {
        localStorage.setItem('certmed_state', JSON.stringify({
            user: this.user,
            isLoggedIn: this.isLoggedIn,
            settings: this.settings,
            recentVerifications: this.recentVerifications.slice(-10)
        }));
    }

    setUser(user) {
        this.user = user;
        this.isLoggedIn = !!user;
        this.saveState();
        this.startSessionTimer();
    }

    logout() {
        this.user = null;
        this.isLoggedIn = false;
        this.currentVerification = null;
        this.clearSessionTimer();
        localStorage.removeItem('certmed_state');
        this.showToast('Logged out successfully', 'success');
    }

    startSessionTimer() {
        if (this.settings.autoLogout) {
            this.clearSessionTimer();
            this.sessionTimer = setTimeout(() => {
                this.logout();
                window.location.reload();
            }, CONFIG.SESSION_TIMEOUT);
        }
    }

    clearSessionTimer() {
        if (this.sessionTimer) {
            clearTimeout(this.sessionTimer);
            this.sessionTimer = null;
        }
    }

    addVerification(verification) {
        this.currentVerification = verification;
        this.recentVerifications.unshift({
            ...verification,
            timestamp: new Date().toISOString()
        });
        this.recentVerifications = this.recentVerifications.slice(-20);
        this.saveState();
    }

    showToast(message, type = 'info', duration = CONFIG.TOAST_DURATION) {
        const toast = {
            id: Date.now(),
            message,
            type,
            duration
        };
        this.notifications.push(toast);
        this.renderToast(toast);
        
        setTimeout(() => {
            this.removeToast(toast.id);
        }, duration);
    }

    renderToast(toast) {
        const toastContainer = document.getElementById('toastContainer') || this.createToastContainer();
        const toastElement = document.createElement('div');
        toastElement.className = `toast toast-${toast.type} fade-in`;
        toastElement.innerHTML = `
            <div class="toast-content">
                <i class="fas ${this.getToastIcon(toast.type)}"></i>
                <span>${toast.message}</span>
                <button class="toast-close" onclick="appState.removeToast(${toast.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        toastContainer.appendChild(toastElement);
    }

    getToastIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }

    removeToast(id) {
        const toast = document.querySelector(`[data-toast-id="${id}"]`);
        if (toast) {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }
        this.notifications = this.notifications.filter(t => t.id !== id);
    }

    createToastContainer() {
        const container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }
}

// Advanced Verification Engine
class VerificationEngine {
    constructor() {
        this.cache = new Map();
        this.blockchainSimulator = new BlockchainSimulator();
    }

    async verifyProduct(code, method = 'manual') {
        // Check cache first
        const cacheKey = `${code}_${method}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Simulate API call delay
        await this.delay(1000);

        let verification = this.performVerification(code);
        
        // Add blockchain verification
        if (verification.success && verification.product) {
            verification.blockchainValid = await this.blockchainSimulator.verifyTransaction(verification.product.blockchainHash);
        }

        // Cache result
        this.cache.set(cacheKey, verification);
        
        // Log verification
        this.logVerification(code, method, verification);
        
        return verification;
    }

    performVerification(code) {
        const product = productDatabase.find(p => 
            p.id === code || 
            p.qrCode === code || 
            p.batchNumber === code
        );
        
        if (!product) {
            return {
                success: false,
                message: 'Product not found in our database. This may be a counterfeit product.',
                type: 'error',
                code: 'PRODUCT_NOT_FOUND',
                suggestions: [
                    'Check the product code for typos',
                    'Ensure the product is from a verified manufacturer',
                    'Contact the manufacturer for verification'
                ]
            };
        }
        
        if (!product.verified) {
            return {
                success: false,
                message: 'This product has been flagged as potentially counterfeit. Please contact the manufacturer.',
                type: 'warning',
                code: 'PRODUCT_FLAGGED',
                alertReason: product.alertReason,
                product: product
            };
        }
        
        const today = new Date();
        const expiryDate = new Date(product.expiryDate);
        
        if (expiryDate < today) {
            return {
                success: false,
                message: 'This product has expired. Please do not use it.',
                type: 'error',
                code: 'PRODUCT_EXPIRED',
                expiryDate: product.expiryDate,
                daysExpired: Math.floor((today - expiryDate) / (1000 * 60 * 60 * 24)),
                product: product
            };
        }

        // Check if product is close to expiry
        const daysToExpiry = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));
        if (daysToExpiry <= 30) {
            return {
                success: true,
                message: `Product verified successfully! Note: Product expires in ${daysToExpiry} days.`,
                type: 'warning',
                code: 'PRODUCT_EXPIRING_SOON',
                daysToExpiry: daysToExpiry,
                product: product
            };
        }
        
        return {
            success: true,
            message: 'Product verified successfully! This is a genuine product.',
            type: 'success',
            code: 'PRODUCT_VERIFIED',
            product: product,
            verificationScore: this.calculateVerificationScore(product)
        };
    }

    calculateVerificationScore(product) {
        let score = 100;
        
        // Deduct points for various factors
        if (!product.nfcEnabled) score -= 5;
        if (product.verified === false) score -= 50;
        
        const today = new Date();
        const expiryDate = new Date(product.expiryDate);
        const daysToExpiry = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));
        
        if (daysToExpiry < 30) score -= 10;
        if (daysToExpiry < 7) score -= 20;
        
        return Math.max(0, score);
    }

    logVerification(code, method, result) {
        const log = {
            timestamp: new Date().toISOString(),
            code,
            method,
            result: result.success ? 'success' : 'failed',
            productId: result.product?.id,
            userId: appState.user?.id
        };
        
        console.log('Verification logged:', log);
        
        // In production, this would be sent to a logging service
        if (!CONFIG.DEMO_MODE) {
            this.sendLogToServer(log);
        }
    }

    async sendLogToServer(log) {
        try {
            await fetch(`${CONFIG.API_ENDPOINT}/logs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(log)
            });
        } catch (error) {
            console.error('Failed to send log to server:', error);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Blockchain Simulator for Advanced Security
class BlockchainSimulator {
    constructor() {
        this.transactions = new Map();
        this.difficulty = 4;
    }

    async verifyTransaction(hash) {
        // Simulate blockchain verification
        await this.delay(500);
        
        // In demo mode, always return true for valid hashes
        if (CONFIG.DEMO_MODE) {
            return this.isValidHash(hash);
        }
        
        // In production, this would query the actual blockchain
        return this.queryBlockchain(hash);
    }

    isValidHash(hash) {
        // Simple hash validation for demo
        return /^0x[a-fA-F0-9]{40}$/.test(hash);
    }

    async queryBlockchain(hash) {
        try {
            const response = await fetch(`${CONFIG.API_ENDPOINT}/blockchain/verify/${hash}`);
            const result = await response.json();
            return result.verified;
        } catch (error) {
            console.error('Blockchain query failed:', error);
            return false;
        }
    }

    async addTransaction(data) {
        const transaction = {
            hash: this.generateHash(data),
            data,
            timestamp: Date.now(),
            nonce: 0
        };
        
        // Mine the block (simplified)
        while (!this.isValidProof(transaction)) {
            transaction.nonce++;
        }
        
        this.transactions.set(transaction.hash, transaction);
        return transaction.hash;
    }

    generateHash(data) {
        // Simple hash generation for demo
        const str = JSON.stringify(data) + Date.now();
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return '0x' + Math.abs(hash).toString(16).padStart(40, '0');
    }

    isValidProof(transaction) {
        const hash = this.generateHash({
            ...transaction,
            nonce: transaction.nonce
        });
        return hash.startsWith('0'.repeat(this.difficulty));
    }
}

// Advanced Modal Manager
class ModalManager {
    constructor() {
        this.activeModal = null;
        this.modalStack = [];
        this.init();
    }

    init() {
        // Close modals on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal(this.activeModal);
            }
        });

        // Close modals on backdrop click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target);
            }
        });
    }

    openModal(modalId, options = {}) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error(`Modal with id "${modalId}" not found`);
            return;
        }

        // Close current modal if stacking is not allowed
        if (!options.stack && this.activeModal) {
            this.closeModal(this.activeModal);
        }

        // Add to stack
        this.modalStack.push(modal);
        this.activeModal = modal;

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Add animation class
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);

        // Focus management
        this.trapFocus(modal);

        // Trigger open event
        this.triggerModalEvent(modal, 'modal:opened', options);
    }

    closeModal(modal) {
        if (!modal) return;

        // Remove from stack
        const index = this.modalStack.indexOf(modal);
        if (index > -1) {
            this.modalStack.splice(index, 1);
        }

        // Update active modal
        this.activeModal = this.modalStack[this.modalStack.length - 1] || null;

        // Hide modal
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, CONFIG.ANIMATION_DURATION);

        // Trigger close event
        this.triggerModalEvent(modal, 'modal:closed');
    }

    closeAllModals() {
        [...this.modalStack].forEach(modal => this.closeModal(modal));
    }

    trapFocus(modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });

        firstElement?.focus();
    }

    triggerModalEvent(modal, eventName, data = {}) {
        const event = new CustomEvent(eventName, { detail: data });
        modal.dispatchEvent(event);
    }
}

// Advanced QR Scanner Manager
class QRScannerManager {
    constructor() {
        this.scanner = null;
        this.isActive = false;
        this.stream = null;
    }

    async startScanner(videoElement, onResult) {
        if (this.isActive) {
            await this.stopScanner();
        }

        try {
            // Request camera permission
            this.stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'environment' } 
            });

            videoElement.srcObject = this.stream;

            // Initialize QR Scanner
            this.scanner = new QrScanner(
                videoElement,
                (result) => this.handleScanResult(result, onResult),
                {
                    highlightScanRegion: true,
                    highlightCodeOutline: true,
                    returnDetailedScanResult: true
                }
            );

            await this.scanner.start();
            this.isActive = true;

            appState.showToast('QR Scanner started', 'success');

        } catch (error) {
            console.error('Failed to start QR scanner:', error);
            appState.showToast('Unable to access camera. Please ensure you have granted camera permissions.', 'error');
            throw error;
        }
    }

    async stopScanner() {
        if (this.scanner) {
            this.scanner.destroy();
            this.scanner = null;
        }

        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }

        this.isActive = false;
    }

    handleScanResult(result, onResult) {
        // Stop scanner immediately
        this.stopScanner();

        // Process result
        const data = result.data || result;
        
        appState.showToast('QR Code detected! Verifying...', 'info');
        
        // Call result handler
        if (onResult) {
            onResult(data);
        }
    }

    async captureImage(videoElement) {
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoElement, 0, 0);
        
        return canvas.toDataURL('image/jpeg');
    }
}

// Advanced Authentication System
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.sessionTimeout = null;
    }

    async login(credentials) {
        const { email, password, rememberMe } = credentials;

        try {
            // Simulate API call
            await this.delay(1000);

            // Validate credentials
            const user = await this.authenticateUser(email, password);
            
            if (!user) {
                throw new Error('Invalid credentials');
            }

            // Set user session
            this.currentUser = user;
            appState.setUser(user);

            // Set session timeout
            if (appState.settings.autoLogout) {
                this.setSessionTimeout();
            }

            // Store session if remember me is checked
            if (rememberMe) {
                localStorage.setItem('certmed_remember', 'true');
            }

            appState.showToast('Login successful!', 'success');
            return user;

        } catch (error) {
            appState.showToast(error.message || 'Login failed', 'error');
            throw error;
        }
    }

    async authenticateUser(email, password) {
        // Demo authentication
        if (CONFIG.DEMO_MODE) {
            if (email === 'demo@certmed.com' && password === 'demo123') {
                return {
                    id: 'user_001',
                    email: 'demo@certmed.com',
                    firstName: 'Demo',
                    lastName: 'User',
                    role: 'admin',
                    permissions: ['verify', 'manage', 'admin'],
                    lastLogin: new Date().toISOString(),
                    profilePicture: null
                };
            }
            
            if (email === 'user@certmed.com' && password === 'user123') {
                return {
                    id: 'user_002',
                    email: 'user@certmed.com',
                    firstName: 'Regular',
                    lastName: 'User',
                    role: 'user',
                    permissions: ['verify'],
                    lastLogin: new Date().toISOString(),
                    profilePicture: null
                };
            }
            
            return null;
        }

        // Production authentication
        try {
            const response = await fetch(`${CONFIG.API_ENDPOINT}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Authentication failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Authentication error:', error);
            return null;
        }
    }

    async register(userData) {
        const { firstName, lastName, email, password, confirmPassword } = userData;

        // Validate input
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            throw new Error('Please fill in all fields');
        }

        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        if (password.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }

        try {
            // Simulate API call
            await this.delay(1500);

            // Check if user already exists
            if (await this.userExists(email)) {
                throw new Error('An account with this email already exists');
            }

            // Create user
            const user = await this.createUser({
                firstName,
                lastName,
                email,
                password: this.hashPassword(password)
            });

            appState.showToast('Account created successfully! Please log in.', 'success');
            return user;

        } catch (error) {
            appState.showToast(error.message || 'Registration failed', 'error');
            throw error;
        }
    }

    async userExists(email) {
        // Demo check
        if (CONFIG.DEMO_MODE) {
            return email === 'demo@certmed.com' || email === 'user@certmed.com';
        }

        // Production check
        try {
            const response = await fetch(`${CONFIG.API_ENDPOINT}/auth/check-email/${email}`);
            const result = await response.json();
            return result.exists;
        } catch (error) {
            console.error('Email check error:', error);
            return false;
        }
    }

    async createUser(userData) {
        // Demo user creation
        if (CONFIG.DEMO_MODE) {
            return {
                id: `user_${Date.now()}`,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                role: 'user',
                permissions: ['verify'],
                createdAt: new Date().toISOString(),
                profilePicture: null
            };
        }

        // Production user creation
        try {
            const response = await fetch(`${CONFIG.API_ENDPOINT}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('User creation failed');
            }

            return await response.json();
        } catch (error) {
            console.error('User creation error:', error);
            throw error;
        }
    }

    logout() {
        this.currentUser = null;
        this.clearSessionTimeout();
        appState.logout();
    }

    setSessionTimeout() {
        this.clearSessionTimeout();
        this.sessionTimeout = setTimeout(() => {
            appState.showToast('Session expired. Please log in again.', 'warning');
            this.logout();
        }, CONFIG.SESSION_TIMEOUT);
    }

    clearSessionTimeout() {
        if (this.sessionTimeout) {
            clearTimeout(this.sessionTimeout);
            this.sessionTimeout = null;
        }
    }

    hashPassword(password) {
        // Simple hash for demo (use proper hashing in production)
        return btoa(password + 'certmed_salt');
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Advanced UI Manager
class UIManager {
    constructor() {
        this.loadingScreen = null;
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupAnimations();
    }

    setupLoadingScreen() {
        this.loadingScreen = document.getElementById('loading-screen');
        
        // Hide loading screen after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 1500);
        });
    }

    hideLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, 500);
        }
    }

    setupNavigation() {
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu on link click
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    setupScrollEffects() {
        let lastScrollY = window.scrollY;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            // Header hide/show on scroll
            if (header) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            }

            lastScrollY = currentScrollY;
        });
    }

    setupAnimations() {
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }

        // Animate numbers on scroll
        this.setupNumberAnimations();
        
        // Setup parallax effects
        this.setupParallaxEffects();
    }

    setupNumberAnimations() {
        const animateNumber = (element, target, duration = 2000) => {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current).toLocaleString();
            }, 16);
        };

        // Setup Intersection Observer for number animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateNumber(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('[data-target]').forEach(element => {
            observer.observe(element);
        });
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    updateUIForAuth(user) {
        const loginBtn = document.querySelector('.nav-actions .btn-outline');
        const signupBtn = document.querySelector('.nav-actions .btn-primary');

        if (user) {
            if (loginBtn) {
                loginBtn.textContent = 'Dashboard';
                loginBtn.onclick = () => this.showDashboard();
            }
            
            if (signupBtn) {
                signupBtn.textContent = 'Logout';
                signupBtn.onclick = () => authManager.logout();
            }

            // Update user menu if exists
            this.updateUserMenu(user);
        } else {
            if (loginBtn) {
                loginBtn.textContent = 'Login';
                loginBtn.onclick = () => modalManager.openModal('loginModal');
            }
            
            if (signupBtn) {
                signupBtn.textContent = 'Sign Up';
                signupBtn.onclick = () => modalManager.openModal('signupModal');
            }
        }
    }

    updateUserMenu(user) {
        const userMenu = document.querySelector('.user-menu');
        if (!userMenu) return;

        userMenu.innerHTML = `
            <div class="user-avatar">
                <img src="${user.profilePicture || 'https://picsum.photos/seed/user/40/40.jpg'}" alt="${user.firstName}">
            </div>
            <div class="user-info">
                <span class="user-name">${user.firstName} ${user.lastName}</span>
                <span class="user-role">${user.role}</span>
            </div>
            <div class="user-dropdown">
                <a href="#" onclick="uiManager.showProfile()">Profile</a>
                <a href="#" onclick="uiManager.showSettings()">Settings</a>
                <a href="#" onclick="authManager.logout()">Logout</a>
            </div>
        `;
    }

    showDashboard() {
        appState.showToast('Dashboard feature coming soon!', 'info');
        // In production, this would navigate to dashboard.html
    }

    showProfile() {
        appState.showToast('Profile feature coming soon!', 'info');
    }

    showSettings() {
        appState.showToast('Settings feature coming soon!', 'info');
    }

    createLoadingSpinner(container) {
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = '<div class="spinner"></div>';
        
        if (container) {
            container.appendChild(spinner);
        }
        
        return spinner;
    }

    removeLoadingSpinner(spinner) {
        if (spinner && spinner.parentNode) {
            spinner.parentNode.removeChild(spinner);
        }
    }
}

// Initialize Global Application State
const appState = new AppState();
const verificationEngine = new VerificationEngine();
const modalManager = new ModalManager();
const qrScannerManager = new QRScannerManager();
const authManager = new AuthManager();
const uiManager = new UIManager();

// Global Functions (for backward compatibility)
function openModal(modalId) {
    modalManager.openModal(modalId);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modalManager.closeModal(modal);
}

function openLoginModal() {
    modalManager.openModal('loginModal');
}

function openSignupModal() {
    modalManager.openModal('signupModal');
}

function openQRModal() {
    modalManager.openModal('qrModal');
    const videoElement = document.getElementById('qrVideo');
    if (videoElement) {
        qrScannerManager.startScanner(videoElement, handleQRResult);
    }
}

function openSMSModal() {
    modalManager.openModal('smsModal');
}

function openManualModal() {
    modalManager.openModal('manualModal');
}

async function handleQRResult(result) {
    modalManager.closeModal(document.getElementById('qrModal'));
    
    try {
        appState.showToast('Verifying QR code...', 'info');
        const verification = await verificationEngine.verifyProduct(result, 'qr');
        appState.addVerification(verification);
        displayVerificationResult(verification);
    } catch (error) {
        appState.showToast('Verification failed. Please try again.', 'error');
    }
}

async function sendSMSVerification() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (!phoneNumber) {
        appState.showToast('Please enter a phone number', 'error');
        return;
    }

    try {
        // Simulate sending SMS
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Store code in session
        sessionStorage.setItem('smsCode', code);
        sessionStorage.setItem('phoneNumber', phoneNumber);
        
        // Show verification code input
        document.getElementById('smsCodeSection').style.display = 'block';
        document.getElementById('smsCodeSent').textContent = `Verification code sent to ${phoneNumber}`;
        
        // Auto-fill for demo
        if (CONFIG.DEMO_MODE) {
            setTimeout(() => {
                const input = document.getElementById('smsCodeInput');
                input.value = code;
                input.placeholder = `Demo: ${code}`;
            }, 1000);
        }
        
        appState.showToast('SMS sent successfully!', 'success');
        
    } catch (error) {
        appState.showToast('Failed to send SMS. Please try again.', 'error');
    }
}

async function verifySMSCode() {
    const enteredCode = document.getElementById('smsCodeInput').value;
    const storedCode = sessionStorage.getItem('smsCode');
    
    if (enteredCode === storedCode) {
        modalManager.closeModal(document.getElementById('smsModal'));
        
        try {
            // Simulate finding product by phone number
            const mockProduct = productDatabase[0];
            const verification = await verificationEngine.verifyProduct(mockProduct.id, 'sms');
            appState.addVerification(verification);
            displayVerificationResult(verification);
        } catch (error) {
            appState.showToast('Verification failed. Please try again.', 'error');
        }
    } else {
        appState.showToast('Invalid verification code. Please try again.', 'error');
    }
}

async function verifyManualCode() {
    const manualCode = document.getElementById('manualCode').value.trim().toUpperCase();
    
    if (!manualCode) {
        appState.showToast('Please enter a product code', 'error');
        return;
    }
    
    modalManager.closeModal(document.getElementById('manualModal'));
    
    try {
        appState.showToast('Verifying product code...', 'info');
        const verification = await verificationEngine.verifyProduct(manualCode, 'manual');
        appState.addVerification(verification);
        displayVerificationResult(verification);
    } catch (error) {
        appState.showToast('Verification failed. Please try again.', 'error');
    }
}

function displayVerificationResult(verification) {
    const resultsSection = document.getElementById('results');
    const resultContent = document.getElementById('resultContent');
    
    if (!resultsSection || !resultContent) return;
    
    let html = '';
    
    if (verification.success) {
        html = `
            <div class="result-card success fade-in">
                <div class="result-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 class="result-title">Verification Successful</h3>
                <p class="result-message">${verification.message}</p>
                <div class="result-details">
                    <h4>Product Information:</h4>
                    <p><strong>Product Name:</strong> ${verification.product.name}</p>
                    <p><strong>Manufacturer:</strong> ${verification.product.manufacturer}</p>
                    <p><strong>Batch Number:</strong> ${verification.product.batchNumber}</p>
                    <p><strong>Expiry Date:</strong> ${verification.product.expiryDate}</p>
                    <p><strong>Category:</strong> ${verification.product.category}</p>
                    <p><strong>Dosage:</strong> ${verification.product.dosage}</p>
                    <p><strong>Form:</strong> ${verification.product.form}</p>
                    <p><strong>Prescription Required:</strong> ${verification.product.prescriptionRequired ? 'Yes' : 'No'}</p>
                    <p><strong>Regulatory Approval:</strong> ${verification.product.regulatoryApproval}</p>
                    <p><strong>Verification Score:</strong> ${verification.verificationScore || 100}/100</p>
                    ${verification.blockchainValid ? '<p class="blockchain-valid"><i class="fas fa-shield-alt"></i> Blockchain Verified</p>' : ''}
                </div>
                <div class="result-actions">
                    <button class="btn btn-primary" onclick="downloadCertificate('${verification.product.id}')">Download Certificate</button>
                    <button class="btn btn-outline" onclick="shareResult('${verification.product.id}')">Share Result</button>
                    <button class="btn btn-secondary" onclick="closeResults()">Verify Another Product</button>
                </div>
            </div>
        `;
    } else {
        html = `
            <div class="result-card ${verification.type} fade-in">
                <div class="result-icon">
                    <i class="fas ${verification.type === 'warning' ? 'fa-exclamation-triangle' : 'fa-times-circle'}"></i>
                </div>
                <h3 class="result-title">Verification ${verification.type === 'warning' ? 'Warning' : 'Failed'}</h3>
                <p class="result-message">${verification.message}</p>
                ${verification.suggestions ? `
                    <div class="result-suggestions">
                        <h4>Suggestions:</h4>
                        <ul>
                            ${verification.suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <div class="result-actions">
                    <button class="btn btn-primary" onclick="closeResults()">Try Again</button>
                    <button class="btn btn-outline" onclick="reportSuspiciousProduct()">Report Suspicious Product</button>
                </div>
            </div>
        `;
    }
    
    resultContent.innerHTML = html;
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function closeResults() {
    const resultsSection = document.getElementById('results');
    if (resultsSection) {
        resultsSection.style.display = 'none';
    }
    
    // Scroll back to verification section
    const verificationSection = document.getElementById('verification');
    if (verificationSection) {
        verificationSection.scrollIntoView({ behavior: 'smooth' });
    }
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe')?.checked;
    
    try {
        await authManager.login({ email, password, rememberMe });
        modalManager.closeModal(document.getElementById('loginModal'));
        uiManager.updateUIForAuth(authManager.currentUser);
    } catch (error) {
        // Error already handled by AuthManager
    }
}

async function signup() {
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    try {
        await authManager.register({ firstName, lastName, email, password, confirmPassword });
        modalManager.closeModal(document.getElementById('signupModal'));
        modalManager.openModal('loginModal');
    } catch (error) {
        // Error already handled by AuthManager
    }
}

function logout() {
    authManager.logout();
    uiManager.updateUIForAuth(null);
}

function downloadCertificate(productId) {
    appState.showToast('Certificate download feature coming soon!', 'info');
}

function shareResult(productId) {
    if (navigator.share) {
        navigator.share({
            title: 'CertMed Verification Result',
            text: 'I verified a medicine using CertMed!',
            url: window.location.href
        });
    } else {
        // Fallback
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        appState.showToast('Link copied to clipboard!', 'success');
    }
}

function reportSuspiciousProduct() {
    appState.showToast('Report feature coming soon!', 'info');
}

function downloadApp(platform) {
    appState.showToast(`Downloading CertMed app for ${platform}...`, 'info');
    
    // Simulate app download
    setTimeout(() => {
        if (platform === 'ios') {
            appState.showToast('Redirecting to App Store...', 'success');
            // In production, this would redirect to actual App Store
            console.log('Redirect to iOS App Store');
        } else if (platform === 'android') {
            appState.showToast('Redirecting to Google Play Store...', 'success');
            // In production, this would redirect to actual Play Store
            console.log('Redirect to Google Play Store');
        }
    }, 1500);
}

function requestDemo() {
    appState.showToast('Demo request feature coming soon!', 'info');
    // In production, this would open a demo request form
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Enhanced navigation functionality
function setupNavigationHandlers() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Add click handlers to all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Enhanced mobile app interactions
function setupMobileAppInteractions() {
    const phoneFrame = document.querySelector('.phone-frame');
    if (phoneFrame) {
        phoneFrame.addEventListener('mouseenter', () => {
            phoneFrame.style.transform = 'perspective(1000px) rotateY(0deg)';
        });
        
        phoneFrame.addEventListener('mouseleave', () => {
            phoneFrame.style.transform = 'perspective(1000px) rotateY(-10deg)';
        });
    }
    
    // Animate app features on scroll
    const appFeatures = document.querySelectorAll('.app-feature');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    });
    
    appFeatures.forEach(feature => observer.observe(feature));
}

// Enhanced CTA statistics animation
function setupCTAStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumber = (element, target) => {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

// Enhanced form validation
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    appState.showToast(`Please fill in the ${input.placeholder || input.name} field`, 'error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Handle form submission based on form ID
                if (this.id === 'loginForm') {
                    login();
                } else if (this.id === 'signupForm') {
                    signup();
                } else {
                    appState.showToast('Form submitted successfully!', 'success');
                }
            }
        });
    });
    
    // Add input validation feedback
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
    });
}

// Enhanced modal functionality
function setupModalEnhancements() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        // Add close on backdrop click
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
        
        // Add escape key close
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal(this.id);
            }
        });
        
        // Trap focus within modal
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            modal.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        }
    });
}

// Enhanced loading states
function showLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    button.disabled = true;
    
    return () => {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Enhanced error handling
function setupErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        appState.showToast('An unexpected error occurred. Please try again.', 'error');
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        appState.showToast('A network error occurred. Please check your connection.', 'error');
    });
}

// Setup Mobile Navigation
function setupMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Handle dropdown menus on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = toggle.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            // Reset dropdown menus
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = '';
            });
        }
    });
}

// Initialize all enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
    // Setup mobile navigation first
    setupMobileNavigation();
    
    // Setup all enhanced features
    setupNavigationHandlers();
    setupMobileAppInteractions();
    setupCTAStats();
    setupFormValidation();
    setupModalEnhancements();
    setupErrorHandling();
    
    // Check if user is logged in
    if (appState.isLoggedIn && appState.user) {
        uiManager.updateUIForAuth(appState.user);
    }
    
    // Setup form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            login();
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            signup();
        });
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for quick search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openManualModal();
        }
        
        // Ctrl/Cmd + L for login
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            if (!appState.isLoggedIn) {
                openLoginModal();
            } else {
                logout();
            }
        }
        
        // Ctrl/Cmd + D for download app
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            downloadApp('ios'); // Default to iOS
        }
    });
    
    // Setup periodic session check
    setInterval(() => {
        if (appState.isLoggedIn && appState.settings.autoLogout) {
            // Check session validity
            // In production, this would validate with the server
        }
    }, 60000); // Check every minute
    
    console.log('CertMed Enhanced Application Initialized Successfully!');
});

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (appState.isLoggedIn && appState.user) {
        uiManager.updateUIForAuth(appState.user);
    }
    
    // Setup form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            login();
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            signup();
        });
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for quick search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openManualModal();
        }
        
        // Ctrl/Cmd + L for login
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            if (!appState.isLoggedIn) {
                openLoginModal();
            } else {
                logout();
            }
        }
    });
    
    // Setup periodic session check
    setInterval(() => {
        if (appState.isLoggedIn && appState.settings.autoLogout) {
            // Check session validity
            // In production, this would validate with the server
        }
    }, 60000); // Check every minute
    
    console.log('CertMed Application Initialized Successfully!');
});

// Pricing functionality
function handlePricingSelection(plan) {
    const pricingData = {
        free: {
            name: 'Free Plan',
            price: '$0/month',
            features: ['10 verifications/month', 'Basic QR scanning', 'Email support'],
            buttonText: 'Get Started'
        },
        professional: {
            name: 'Professional Plan',
            price: '$29/month',
            features: ['Unlimited verifications', 'Advanced QR & SMS verification', 'Real-time analytics', 'Priority support', 'Mobile app access'],
            buttonText: 'Start Free Trial'
        },
        enterprise: {
            name: 'Enterprise Plan',
            price: 'Custom Pricing',
            features: ['Everything in Professional', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'On-premise deployment'],
            buttonText: 'Contact Sales'
        }
    };

    const planData = pricingData[plan];
    
    if (plan === 'enterprise') {
        showContactSalesModal(planData);
    } else {
        showPaymentModal(planData);
    }
}

function showPaymentModal(planData) {
    const modalHtml = `
        <div class="modal active" id="paymentModal">
            <div class="modal-content payment-modal">
                <span class="close" onclick="closeModal('paymentModal')">&times;</span>
                <h2>Complete Your Subscription</h2>
                <div class="payment-summary">
                    <h3>${planData.name}</h3>
                    <p class="price">${planData.price}</p>
                    <ul class="features-list">
                        ${planData.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                <form id="paymentForm" onsubmit="processPayment(event, '${planData.name.toLowerCase()}')">
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" required placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" required placeholder="john@example.com">
                    </div>
                    <div class="form-group">
                        <label for="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" required placeholder="1234 5678 9012 3456" maxlength="19">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="expiry">Expiry Date</label>
                            <input type="text" id="expiry" required placeholder="MM/YY" maxlength="5">
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" required placeholder="123" maxlength="3">
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary btn-large">
                            <i class="fas fa-lock"></i> Complete Payment
                        </button>
                        <button type="button" class="btn btn-outline" onclick="closeModal('paymentModal')">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add modal to body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
    
    // Setup card formatting
    setupCardFormatting();
}

function showContactSalesModal(planData) {
    const modalHtml = `
        <div class="modal active" id="contactSalesModal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('contactSalesModal')">&times;</span>
                <h2>Contact Sales - Enterprise Plan</h2>
                <p>Get a custom quote tailored to your organization's needs</p>
                <form id="contactSalesForm" onsubmit="submitSalesInquiry(event)">
                    <div class="form-group">
                        <label for="companyName">Company Name</label>
                        <input type="text" id="companyName" required placeholder="Your Company">
                    </div>
                    <div class="form-group">
                        <label for="contactName">Contact Name</label>
                        <input type="text" id="contactName" required placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="workEmail">Work Email</label>
                        <input type="email" id="workEmail" required placeholder="john@company.com">
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" required placeholder="+1 (555) 123-4567">
                    </div>
                    <div class="form-group">
                        <label for="companySize">Company Size</label>
                        <select id="companySize" required>
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message (Optional)</label>
                        <textarea id="message" rows="4" placeholder="Tell us about your needs..."></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary btn-large">
                            <i class="fas fa-paper-plane"></i> Submit Inquiry
                        </button>
                        <button type="button" class="btn btn-outline" onclick="closeModal('contactSalesModal')">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add modal to body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
}

function setupCardFormatting() {
    const cardNumber = document.getElementById('cardNumber');
    const expiry = document.getElementById('expiry');
    const cvv = document.getElementById('cvv');
    
    if (cardNumber) {
        cardNumber.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    if (expiry) {
        expiry.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
    
    if (cvv) {
        cvv.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
}

function processPayment(event, plan) {
    event.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        cardNumber: document.getElementById('cardNumber').value,
        expiry: document.getElementById('expiry').value,
        cvv: document.getElementById('cvv').value
    };
    
    // Simulate payment processing
    appState.showToast('Processing payment...', 'info');
    
    setTimeout(() => {
        closeModal('paymentModal');
        appState.showToast(`Successfully subscribed to ${plan}! Welcome to CertMed!`, 'success');
        
        // Store subscription in app state
        appState.setSubscription(plan);
        
        // Update UI to show premium features
        updateUIForPremiumPlan(plan);
    }, 2000);
}

function submitSalesInquiry(event) {
    event.preventDefault();
    
    const formData = {
        companyName: document.getElementById('companyName').value,
        contactName: document.getElementById('contactName').value,
        workEmail: document.getElementById('workEmail').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        companySize: document.getElementById('companySize').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission
    appState.showToast('Submitting your inquiry...', 'info');
    
    setTimeout(() => {
        closeModal('contactSalesModal');
        appState.showToast('Sales inquiry submitted! Our team will contact you within 24 hours.', 'success');
        console.log('Sales inquiry:', formData);
    }, 1500);
}

function updateUIForPremiumPlan(plan) {
    // Update UI elements to reflect premium status
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
        navActions.innerHTML = `
            <span class="premium-badge">Premium</span>
            <button class="btn btn-outline" onclick="window.location.href='dashboard.html'">Dashboard</button>
            <button class="btn btn-primary" onclick="logout()">Logout</button>
        `;
    }
}

// Newsletter functionality
function handleNewsletterSignup(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (!email) {
        appState.showToast('Please enter your email address', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        appState.showToast('Please enter a valid email address', 'error');
        return;
    }
    
    appState.showToast('Subscribing to newsletter...', 'info');
    
    setTimeout(() => {
        appState.showToast('Successfully subscribed to our newsletter!', 'success');
        event.target.reset();
    }, 1000);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Social media functionality
function handleSocialMediaClick(platform) {
    const urls = {
        facebook: 'https://facebook.com/certmed',
        twitter: 'https://twitter.com/certmed',
        linkedin: 'https://linkedin.com/company/certmed',
        instagram: 'https://instagram.com/certmed'
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank');
        appState.showToast(`Opening ${platform}...`, 'info');
    }
}

// Footer links functionality
function handleFooterLink(link) {
    const pages = {
        'Privacy Policy': 'privacy.html',
        'Terms of Service': 'terms.html',
        'Cookie Policy': 'cookies.html',
        'Documentation': 'docs.html',
        'API': 'api.html',
        'Support': 'support.html'
    };
    
    if (pages[link]) {
        // For now, show a toast since these pages don't exist yet
        appState.showToast(`${link} page coming soon!`, 'info');
    } else {
        appState.showToast('Navigation to ' + link, 'info');
    }
}

// Export for module usage (if needed)
window.CertMed = {
    appState,
    verificationEngine,
    modalManager,
    qrScannerManager,
    authManager,
    uiManager,
    CONFIG
};
