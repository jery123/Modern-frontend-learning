 const laptop = {
    screens          :   {
        resolution  : 1080,
        displayType  : "LCD",
        touchEnabled: false
    },
    pointingDevice   :   "Trackpad",
    ram              :   "16 GB",
    storage          :   "512 GB",
    wifi             :   true,
    toggleWifi       :   function(wifi_status) {
        this.wifi = wifi_status;
    },
    bands            : {
          speed_wb_2_5g  : 150,
          speed_wb_5g  : 300,
    },
    wifiBands        :    function(wb_2_5g, wb_5g){
        this.bands.speed_wb_2_5g = wb_2_5g;
        this.bands.speed_wb_5g = wb_5g;
    }
}
 
console.log("The Laptop Object: ", laptop);
console.log("The Laptop stoage is: ", laptop.storage);
console.log("The Laptop screen resolution is: ", laptop.screens.resolution);

var query = "ram";
console.log("The Laptop ram is: ", laptop[query]);

console.log("2.5g speed before: ", laptop.bands.speed_wb_2_5g);
console.log("5g speed before: ", laptop.bands.speed_wb_5g);
laptop.wifiBands(300, 1500);
console.log("2.5g speeda after:  ", laptop.bands.speed_wb_2_5g);
console.log("5g speeda after:  ", laptop.bands.speed_wb_5g);
