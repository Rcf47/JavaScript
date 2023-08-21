let group = {
  title: "Our group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(function what(student) { console.log(this.title + ": " + student) })
  }
}

group.showList()
