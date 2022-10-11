function zabawaZLiczbami(a, b) {
  var dod = a + b;
  var odj = a - b;
  var mno = a * b;
  console.log("Wynik dodawania wynosi:", + dod)
  console.log("Wynik odejmowania wynosi:", + odj)
  console.log("Wynik mnożenia wynosi:", + mno)

  if (dod < 0 || odj < 0 || mno < 0) {
    return console.log("Wynik jest nieprawidłowy");
  }
}
zabawaZLiczbami(3, 17);
zabawaZLiczbami(-3, 17);
zabawaZLiczbami(3, 0);
zabawaZLiczbami(23, -23);
zabawaZLiczbami(3, 11);

