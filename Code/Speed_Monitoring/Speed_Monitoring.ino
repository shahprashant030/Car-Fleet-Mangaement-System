 int Xread;
 int Xrest; 
 double Gx; 
 int sensorpin = 0;
 int t1; 
 
 void setup() 
 { 
  Serial.begin(9600); 
  digitalWrite(13,HIGH); 
  delay(1000); 
  Xrest=analogRead(sensorpin); 
  Serial.print(Xrest); 
  digitalWrite(13,LOW); 
  } 
  void loop() 
  { 
    Serial.print("Time "); 
    t1=millis(); 
    Serial.println(t1*0.001); 
    Xread = analogRead(sensorpin)-Xrest; 
    Gx=Xread/67.584; //Gx=>Acceleration
    Serial.print("Speed:"); 
    Serial.print(Gx*t1*0.001);
    delay(700); 
   }
