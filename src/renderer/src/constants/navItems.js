import React from 'react';
import {
  Home,
  FileText,
  FileSpreadsheet,
  Package,
  Truck,
  User,
  Settings as SettingsIcon
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: FileText, label: 'Lead Sheet', id: 'lead-sheet' },
  { icon: FileSpreadsheet, label: 'Quote Sheet', id: 'quote-sheet' },
  { icon: Package, label: 'Inventory', id: 'inventory' },
  { icon: Truck, label: 'Job Orders', id: 'job-orders' },
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: SettingsIcon, label: 'Settings', id: 'settings' }
];

export default navItems;
