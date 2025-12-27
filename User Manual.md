# **User Manual \- Inventory Management System (IMS)**

## **1\. Getting Started**

### **Login**

1. Launch the IMS application.  
2. Enter your **Username** and **Password**.  
3. Click **Sign In**.  
   * *Note: If you do not have an account, contact your System Administrator.*

### **Dashboard Overview**

After logging in, you will see the Dashboard, which provides a snapshot of the system:

* **Key Metrics:** Total Assets, Available Stock, Defective Items, and Room Occupancy.  
* **Room Status:** Quick count of Total, Occupied, Vacant, and Maintenance rooms.  
* **Recent Activity:** A log of the latest actions performed by users.  
* **Asset Distribution:** A bar chart showing item counts by category.

## **2\. Managing Inventory (Storage Tab)**

### **Viewing Inventory**

* Navigate to the **Inventory** tab.  
* Use the **Search Bar** to find specific items by name.  
* Toggle between **Active Inventory** and **Pullout/Disposal** using the buttons at the top.  
* Click **View Details** on any item group to see individual item IDs and statuses.

### **Adding New Stock**

1. Expand the relevant Category and Sub-Category.  
2. Click the **Add Stock** button (Plus icon) next to the sub-category name.  
3. **Select Product:** Choose an existing product type from the dropdown.  
   * *If the product type doesn't exist, go to **Settings \> Storage** to create a "Product Card" first.*  
4. **Condition:** Select "Working" or "Defective".  
5. **Qty:** Enter the number of items to add.  
6. Click **Confirm Add Stock**.

### **Moving Items to Pullout**

1. Expand the item group details.  
2. Locate the specific item ID.  
3. Click the **Archive** icon (Box with arrow).  
4. Confirm the action to move the item to the "Pullout/Disposal" list.

## **3\. Managing Floors & Rooms (Floors Tab)**

### **Room Overview**

* Navigate to the **Floors & Rooms** tab.  
* You will see floors listed with their respective rooms.  
* **Room Cards** show the Room Name, ID, Status (Vacant/Occupied), and item count.

### **Managing Room Contents**

1. Click **Manage** on a room card.  
2. **View:** See a list of all items currently assigned to this room.  
3. **Add Items:** Select items from the "Unassigned" inventory to move into this room.  
4. **Transfer:** Select items in the room and move them to another Room, Box, or back to Inventory.  
5. **Swap All:** (See below).

### **Swapping Rooms**

This feature allows you to exchange everything between two rooms (Name, Status, and All Items).

1. Click the **Swap** button on a room card (or "Swap All" inside the Manage view).  
2. Select the **Target Room** you want to swap with from the dropdown.  
3. Confirm the action.  
   * *Example: Swapping "Room 101" (Occupied) with "Room 102" (Vacant) will result in Room 101 becoming Vacant and Room 102 becoming Occupied, with all furniture moved accordingly.*

### **Changing Room Status**

(Admins Only)

* On the room card, click the small colored bars (Green/Blue/Yellow) to quickly set status to **Vacant**, **Occupied**, or **Maintenance**.

## **4\. Settings & Administration**

### **Storage Configuration**

* **Add Category:** Create high-level categories (e.g., Electronics, Furniture).  
* **Add Sub-Category:** Create sub-groups under categories (e.g., Monitors, Chairs).  
* **Create Product Card:** Define standard product names (e.g., "Dell 24in Monitor") so they appear in the Add Stock dropdown.

### **Floor Management**

* **Add New Floor:** Define a new floor level and code (e.g., "2nd Floor", "F2").  
* **Add Room:** Add new rooms to existing floors.

### **User Accounts**

* **Add New User:** Create accounts for other staff.  
* **Roles:**  
  * *Supervisor/Lead/Trainer:* Full access (Admin).  
  * *Operator:* Restricted access (cannot change room status or manage settings).

### **Reports**

1. Go to **Settings \> Report**.  
2. **Filter:** Choose to include All items, or only Active/Defective/Pullout.  
3. **Sections:** Check/Uncheck boxes to customize the report (Overview, Storage, Rooms, Boxes).  
4. **Specific Rooms:** Expand the dropdown to select specific rooms if you don't want a full facility report.  
5. Click **Download PDF**.

### **Backup & Restore**

* **Backup:** Click "Download Backup" to save a `.json` file of your entire database. **Do this regularly.**  
* **Restore:** Use "Select Backup File" to load a previously saved `.json` file. *Warning: This overwrites current data.*  
* **Factory Reset:** Wipes the database clean. Use with extreme caution.

