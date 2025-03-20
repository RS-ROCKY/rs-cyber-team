function getPassword(fileType) {
    switch (fileType) {
        case 'BD_NID':
            return 'RS1'; // Replace with actual password
        case 'INDIAN_NID':
            return 'RS3'; // Replace with actual password
        case 'DRIVING_LICENSE':
            return 'RS2'; // Replace with actual password
        case 'DEATH_CERTIFICATE':
            return 'RS5'; // Replace with actual password
        case 'BD_PASSPORT':
            return 'RS4'; // Replace with actual password
        case 'STUDENT_CARD':
            return 'RS7'; // Replace with actual password
        default:
            return '';
    }
}