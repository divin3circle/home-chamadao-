export const didYouKnowMessages: string[] = [
  "Traditional chamas in Kenya have existed for decades, helping communities pool resources to fund businesses, education, and emergencies.",
  "Chamas in Kenya manage billions of shillings annually, showcasing the power of community savings & guarantor-backed lons.",
  "Joining a chama can help you access loans at lower interest rates compared to traditional banks.",
  "Blockchain technology makes it possible to manage savings and loans transparently without needing a bank.",
  "Decentralized platforms like ChamaDAO allow you to create and manage chamas globally with just an internet connection.",
  "Using smart contracts, ChamaDAO ensures that all transactions are automated and tamper-proof.",
  "Group savings can multiply wealth faster through pooled investments and reduced financial risks.",
  "Financial transparency is a cornerstone of successful chamas, ensuring all members trust the system.",
  "Setting clear rules for contributions and loans is key to managing a chama effectively.",
  "The word ‘chama’ comes from the Swahili word meaning ‘group’ or ‘association.’",
  "Decentralized apps (DApps) like ChamaDAO run on blockchain networks and can't be shut down or altered by a single entity.",
  "Blockchain is like a digital ledger that keeps everyone's contributions and loans visible to all members of a chama.",
  "Small, consistent contributions to a chama can lead to big payouts for members over time.",
  "In many communities, chamas are not just about money—they also strengthen social bonds and trust.",
  "Chamas empower members to achieve goals they couldn't reach individually, like buying land or starting a business.",
  "With ChamaDAO, you can create or join a digital chama in just a few clicks!",
  "ChamaDAO uses blockchain to give you complete control and transparency over your chama finances.",
];

export function getRandomDidYouKnow(): string {
  const randomIndex = Math.floor(Math.random() * didYouKnowMessages.length);
  return didYouKnowMessages[randomIndex];
}
