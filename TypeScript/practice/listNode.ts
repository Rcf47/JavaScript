class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const try1 = new ListNode(0);
const try2 = new ListNode(3, new ListNode(4, new ListNode(5)))
console.log(try1);
console.log(try2)
