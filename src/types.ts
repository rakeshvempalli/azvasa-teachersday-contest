export interface ContestCategory {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  iconName: 'notebook' | 'camera' | 'mic';
  description: string;
  highlightTagline: string;
  formatGuide: string;
  evaluationCriteria: string[];
}

export interface ContestInfoItem {
  icon: string;
  heading: string;
  highlightText?: string;
  description: string;
  badge?: string;
}
