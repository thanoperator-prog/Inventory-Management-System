# **IMS \- Inventory Management System**

A comprehensive, web-based Inventory Management System designed for tracking assets, managing room allocations, and generating reports. This application is built as a Progressive Web App (PWA) using React, Tailwind CSS, and Firebase Firestore for real-time data synchronization.

## **Features**

* **Dashboard:** Real-time overview of total assets, stock availability, room occupancy, and recent activity logs.  
* **Inventory Management:**  
  * Categorize items by Main Category and Sub-Category.  
  * Track item conditions (Working/Defective).  
  * Manage "Pullout/Disposal" items separately.  
  * Search and filter inventory.  
* **Floor & Room Management:**  
  * Visual representation of floors and rooms.  
  * Track room status (Vacant, Occupied, Maintenance).  
  * **Swap Room:** Quickly exchange all contents, names, and statuses between two rooms.  
  * Manage contents within specific rooms.  
* **Storage Box Management:** Create and manage storage boxes for unassigned or bulk items.  
* **User Management:** Role-based access control (Supervisor, Lead, Trainer, Operator).  
* **Reporting:**  
  * Generate printable PDF reports.  
  * Customizable report sections (Overview, Storage, Rooms, Boxes).  
  * Filter reports by item status (Active, Defective, Pullout).  
* **Activity Log:** Detailed audit trail of all actions performed in the system.  
* **Backup & Restore:** Export database to JSON and restore from file.  
* **PWA Support:** Installable on mobile and desktop devices.

## **Tech Stack**

* **Frontend:** React 18 (via CDN), Babel (standalone).  
* **Styling:** Tailwind CSS (via CDN).  
* **Database:** Firebase Firestore (Compat SDK).  
* **Icons:** Lucide Icons.  
* **PDF Generation:** html2pdf.js.

## **Setup & Installation**

### **1\. Prerequisites**

* A Firebase project (create one at [console.firebase.google.com](https://console.firebase.google.com)).  
* A web server (local or hosted) to serve the files.

### **2\. Configuration**

1. Open `index.html`.  
2. Locate the `firebaseConfig` object within the `<script type="text/babel">` block.

Replace the placeholder values with your actual Firebase project configuration:  
const firebaseConfig \= {  
    apiKey: "YOUR\_API\_KEY",  
    authDomain: "YOUR\_PROJECT\_ID.firebaseapp.com",  
    projectId: "YOUR\_PROJECT\_ID",  
    storageBucket: "YOUR\_PROJECT\_ID.firebasestorage.app",  
    messagingSenderId: "YOUR\_SENDER\_ID",  
    appId: "YOUR\_APP\_ID",  
    measurementId: "YOUR\_MEASUREMENT\_ID"  
};

3.   
4. **Firestore Rules:** Ensure your Firestore security rules allow read/write access. For testing/development, you can start in **Test Mode**.

### **3\. Running the App**

Since this uses Service Workers for PWA functionality, it must be served over `HTTPS` or `localhost`.

* **Local Development:** You can use a simple extension like "Live Server" in VS Code or run `npx serve .` in the directory.  
* **Deployment:** Upload `index.html`, `sw.js`, `manifest.json`, and `icon-512.png` to any static host (GitHub Pages, Vercel, Netlify, Firebase Hosting).

## **File Structure**

* `index.html`: The core application containing all HTML, CSS (Tailwind classes), and React logic.  
* `sw.js`: Service Worker for caching assets and enabling offline PWA capabilities.  
* `manifest.json`: Web App Manifest defining the app's name, icons, and theme colors for installation.  
* `icon-512.png`: The application icon.

## **Default Credentials**

When you first load the application, use the default administrator account:

* **Username:** `admin`  
* **Password:** `123`

*Note: Please create a new user and delete the default admin account immediately after setup.*

## **License**

[MIT License](https://www.google.com/search?q=LICENSE) \- Free to use and modify.

