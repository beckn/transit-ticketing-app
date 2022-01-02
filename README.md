# transit-ticketing-app
Pre-requisites to install on your system
1. react-native-cli
2. node.js
3. expo
4. android studio if you wish to run in a simmulator

# run the app
1. after installing the above mentioned run the command `npm start` this will run the metro bundle.
2. once you run the command the it will run the metro bundle on `http://localhost:19002/`
  # to run on the simmulator
  1. select the device which you want the app to run on in ADM and run it. (This simmulator device should have expo )
  2. once the simulator is up then press `a` for android in the terminal where you run the command `npm start` to run the app under expo in the simulator.

  # to run on a real device
  1. install expo in your mobile (ios or android)
  2. scan the QRcode display in the terminal when you run `npm start`

for more commands refer to package.json

# naming convention to follow for creating the components
  name of file should start with capital letter i.e. it should be Modal.tsx not modal.tsx.
  folder name where you keep components should start with capital letter.
