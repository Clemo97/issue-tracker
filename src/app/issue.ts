export interface Issue {
  issueNo: number;
  title: string;
  description: string;
  priority: 'low' | 'high';
  type: 'Feature' | 'Bug' | 'Documentation';
  completed?: Date;
//   The completed property is the date that an issue is resolved.We define it as
//   optional because new issues will not have this property set.

}
