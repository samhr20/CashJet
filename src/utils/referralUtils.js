
// Function to generate referral code from user ID
export const generateReferralCode = (userId) => {
    return userId
        .split('')
        .map(char => char.charCodeAt(0))
        .join('')
        .slice(0, 6); 
};

// Function to generate referral link
export const generateReferralLink = (referralCode) => {
    return `http://localhost:3000/referral?ref=${referralCode}`;
};
