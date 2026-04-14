# CertMed - Medicine Authentication System

A comprehensive frontend solution for authenticating pharmaceutical products using QR codes, SMS verification, and manual code entry. This system helps combat counterfeit medicines in the market.

## Features

### Authentication Methods
- **QR Code Scanning**: Real-time camera-based QR code verification
- **SMS Verification**: Phone number + authentication code validation
- **Manual Entry**: Direct code input for product verification

### Key Features
- Modern, responsive UI design
- Real-time product verification
- Mock database with sample products
- Mobile-friendly interface
- Print-friendly results
- Comprehensive error handling
- Loading states and user feedback
- Notification system
- **Fully Functional Dashboard**: Real-time analytics, charts, and data management
- **Product Catalog**: Browse and search medicine database
- **Manufacturer Pages**: Company information and product listings
- **Pricing System**: Multiple subscription plans with payment processing
- **Newsletter Signup**: Email validation and subscription management
- **Social Media Integration**: Interactive links and sharing

## Project Structure

```
CertMed2/
|-- index.html          # Main landing page
|-- dashboard.html      # Analytics dashboard
|-- verify.html         # Verification page
|-- catalog.html        # Product catalog
|-- manufacturer.html   # Manufacturer information
|-- about.html          # About page
|-- contact.html        # Contact page
|-- styles.css          # Base CSS styling
|-- styles-enhanced.css # Enhanced CSS with animations
|-- script.js           # Complete JavaScript functionality
|-- README.md           # Project documentation
```

## Demo Data

The system includes sample products for testing:

### Authentic Products
- **MED001**: Paracetamol 500mg (QR: `QR_MED001_BATCH2024001`)
- **MED002**: Amoxicillin 250mg (SMS: `MED002456`)
- **MED004**: Vitamin D3 1000IU (Manual: `MED004012`)

### Test Cases
- **MED003**: Expired product (QR: `QR_MED003_BATCH2024003`)
- **FAKE_QR_CODE**: Counterfeit product simulation

## How to Use

### 1. QR Code Verification
1. Click "Scan QR Code" button
2. Allow camera access
3. Point camera at QR code on medicine packaging
4. System automatically verifies and displays results

### 2. SMS Verification
1. Click "SMS Verify" button
2. Enter phone number and authentication code
3. Click "Verify" to check product authenticity

### 3. Manual Entry
1. Click "Enter Code" button
2. Input authentication code from packaging
3. Optionally add batch number for enhanced verification

### 4. Dashboard Features
- View real-time analytics and statistics
- Generate reports and export data
- Manage products and users
- Monitor verification trends

### 5. Demo Mode
- Click "Run Demo" button to test with random sample codes
- Or manually enter any of the demo codes mentioned above

## Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup and modern structure
- **CSS3**: Responsive design with animations
- **JavaScript ES6+**: Modern JavaScript with async/await
- **Font Awesome**: Icon library
- **Chart.js**: Data visualization
- **AOS**: Animation library
- **QR Scanner Library**: Real-time QR code scanning

### Key Components
- **Navigation**: Sticky header with mobile menu
- **Hero Section**: Eye-catching landing area
- **Verification Methods**: Three authentication options
- **Dashboard**: Analytics, charts, and data management
- **Modal System**: Interactive dialogs for verification
- **Results Display**: Detailed product information
- **Contact Form**: User communication channel
- **Pricing Section**: Subscription plans with payment processing

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1200px
- Touch-friendly interface
- Optimized for all screen sizes

## Security Features

### Verification Logic
- Code validation against mock database
- Expiry date checking
- Counterfeit detection
- Status-based result display

### User Experience
- Loading states during verification
- Clear error messages
- Success/warning notifications
- Print functionality for documentation
- Real-time data updates

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Setup Instructions

### Local Development
1. Clone or download the project files
2. Open `index.html` in a modern web browser
3. Allow camera permissions for QR scanning
4. Test with demo codes or real QR codes

### Server Deployment
For production use, deploy to a web server with HTTPS (required for camera access).

## Future Backend Integration

The frontend is ready for backend integration with these endpoints:

### Authentication Endpoints
```
POST /api/verify/qr
POST /api/verify/sms  
POST /api/verify/manual
```

### Expected Response Format
```json
{
  "found": true,
  "product": {
    "id": "MED001",
    "name": "Paracetamol 500mg",
    "manufacturer": "PharmaCorp Ltd",
    "batchNumber": "BATCH2024001",
    "expiryDate": "2025-12-31",
    "status": "authentic",
    "description": "Pain reliever"
  },
  "status": "authentic",
  "message": "This product is authentic and safe to use."
}
```

## Hackathon Notes

### Completed Features
- [x] Complete frontend implementation
- [x] QR code scanning functionality
- [x] SMS authentication system
- [x] Manual code entry
- [x] Product verification logic
- [x] Responsive design
- [x] Mock database for testing
- [x] User feedback and notifications
- [x] Print functionality
- [x] Fully functional dashboard with real-time analytics
- [x] Interactive charts and data visualization
- [x] Product catalog with search functionality
- [x] Manufacturer pages and information
- [x] Pricing system with payment processing
- [x] Newsletter signup with validation
- [x] Social media integration
- [x] Export functionality (CSV/JSON)
- [x] Settings and preferences management

### Next Steps (Backend Development)
- [ ] Set up Node.js/Express server
- [ ] Create MongoDB/SQL database schema
- [ ] Implement authentication APIs
- [ ] Add real SMS integration (Twilio)
- [ ] QR code generation system
- [ ] Admin dashboard for product management
- [ ] Analytics and reporting
- [ ] Payment processing integration

### Potential Enhancements
- Multi-language support
- Offline functionality
- Push notifications
- Blockchain integration
- Machine learning for counterfeit detection

## Testing

### Demo Codes to Test
1. **Authentic**: `QR_MED001_BATCH2024001`
2. **Expired**: `QR_MED003_BATCH2024003`  
3. **Counterfeit**: `FAKE_QR_CODE`
4. **SMS Code**: `MED002456`
5. **Manual Code**: `MED004012`

### Test Scenarios
- Valid QR code scan
- Invalid/expired codes
- Network error handling
- Camera permission denial
- Mobile device testing
- Print functionality
- Dashboard interactions
- Data export functionality

## Contact

For questions or support during the hackathon:
- Email: info@certmed.com
- Phone: +1-800-CERTMED

---

**CertMed** - Protecting Health Through Authentication
