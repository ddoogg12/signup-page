/* 주소관련 타입 정의 */

/* 기본 주소타입 정의 */
export type Address = {
  zip: string;
  address1: string;
  address2: string | '';
}

/* Daum API에서 넘겨받은 주소 타입 정의 */
export type DaumAddress = {
  address: string;
  autoJibunAddress: string;
  roadAddress: string;
  sigunguCode: string;
}