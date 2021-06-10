#define relay A0
void setup() {
  char input;
  pinMode(relay,OUTPUT);
}

void loop() {
  if(Serial.available()>0){
    input = Serial.read();
  }

  //1 => Turn ON
  if(input == '1'){
    digitalWrite(relay,HIGH); 
  }

  //0 => Turn OFF
  if(input == '0'){
    digitalWrite(realy,LOW);
  }
}
