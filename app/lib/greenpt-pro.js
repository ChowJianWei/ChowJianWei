export const classifyTrash = async () => ({ category: 'General Waste', confidence: 0 });
export const classifyBin = async () => ({ binType: 'Unclassified', confidence: 0 });
export const verifyCheckIn = async () => ({ isSameBin: false, hasChange: false, confidence: 0 });
