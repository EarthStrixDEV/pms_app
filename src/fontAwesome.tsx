import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import { faGlobeAmericas, faChartBar, faEdit } from '@fortawesome/free-solid-svg-icons';

// เพิ่มไอคอนทั้งหมดที่ต้องการลงใน library
library.add(fas, far, fab);
library.add(faGlobeAmericas, faChartBar, faEdit);