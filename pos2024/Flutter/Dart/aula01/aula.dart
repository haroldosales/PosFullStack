var myText = "meu text";
String myOtherText = "outra maneira";

int myInt = 5;
var myNumber = 5.9;

var myArray = [1, 2, 3, 4];
Object myObject = {"key": "value"};

String? maybeNull;
Object? myOtherObject;

//late: voce define o valor depois
late String notDefinedNow;

// nao pode ser trocado
final String thisIsFinal = 'final string';

//converção
/*  
    is confirma algo'
    as converte 
    % resto da divisao
    ??=  ele so faz se tive nulo mesmo para salvar
  var numberType = myInt % 2 == 0? 'par' ; 'inpar';
*/
//constando nunca mudar
const myConst = 123;

var numberType = myInt % 2 == 0 ? 'par' : 'impar';

class Cat {
  String? name;
  int? age;

  Cat({this.name, this.age});
}

void main() {
  print(numberType);
  // print( myOtherObject?.toString());

  // myOtherObject = {"Key": "other value"};
  // print(myOtherObject?.toString());

  notDefinedNow = "ola";
  print('Ola mundo');

  print(myInt != myConst);

  var myCat = new Cat(name: "Estrela", age: 5);
  print(myCat.name);

  myCat.name = "sisi";

  print((myCat.name));
}
