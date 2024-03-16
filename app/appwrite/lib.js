export default function calculateOneMonthAgo() {
    const today = new Date();
    today.setDate(today.getDate() - 30); // Set date 30 days back
    return today.toISOString();
  }

