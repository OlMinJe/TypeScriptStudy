/**
 * < 인터페이스와 클래스 >
 * 클래스에 'implements' 키워드를 사용하여 해당 인터페이스를 구현할 수 있다.
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
