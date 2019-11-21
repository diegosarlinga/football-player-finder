import moment from 'moment';

export function calculateAge(birthDate: string): number {
  return moment().diff(birthDate, 'years');
}
