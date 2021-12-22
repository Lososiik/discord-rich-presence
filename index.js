function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const ps = require('prompt-sync')
const prompt = ps();
const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})


function main(){
    console.clear()
    console.log('██████╗░██╗░██████╗░█████╗░░█████╗░██████╗░██████╗░  ██████╗░██████╗░░█████╗░');
    console.log('██╔══██╗██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔══██╗██╔══██╗██╔══██╗');
    console.log('██║░░██║██║╚█████╗░██║░░╚═╝██║░░██║██████╔╝██║░░██║  ██████╔╝██████╔╝██║░░╚═╝');
    console.log('██║░░██║██║░╚═══██╗██║░░██╗██║░░██║██╔══██╗██║░░██║  ██╔══██╗██╔═══╝░██║░░██╗');
    console.log('██████╔╝██║██████╔╝╚█████╔╝╚█████╔╝██║░░██║██████╔╝  ██║░░██║██║░░░░░╚█████╔╝');
    console.log('╚═════╝░╚═╝╚═════╝░░╚════╝░░╚════╝░╚═╝░░╚═╝╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░░╚════╝░');
    console.log('[1] Start');
    console.log('[2] Help');
    let choice = prompt('[?]>');


    if(choice == 1){
        checkImgs = true

        clientID = prompt('Client ID: ');
        details = prompt('Details: ');
        state = prompt('State: ');
        asklargeimg = prompt('Do you want Large Img in your RPC y/n?: ');
        if(asklargeimg == 'y'){
            largeImg = prompt('LargeImage: ');
            largeImgTxt = prompt('LargeImage text: ');
        }else{
            let r = (Math.random() + 1).toString(36).substring(7);
            largeImg = r
            largeImgTxt = r
            checkImgs = false
        }
        asksmallimg = prompt('Do you want Small Img in your RPC y/n?: ');
        if(asksmallimg == 'y'){
            if(checkImgs == true){
                smallImg = prompt('SmallImage: ');
                smallImgTxt = prompt('SmallImage text: ');
            }else{
                console.log('Small Image cannot exist without Large Image');
            }
        }else{
            let r = (Math.random() + 1).toString(36).substring(7);
            smallImg = r
            smallImgTxt = r
        }
        asktimer = prompt('Do you want StartTimestamp in your RPC y/n?: ')
        if(asktimer == 'y'){
            timestamp = new Date()
        }else{
            timestamp = null
        }
        askbtn = prompt('Do you want button in your RPC y/n?: ');
        if(askbtn == 'y'){
            btn = prompt('Button Text: ');
            btnurl = prompt('Button Url: ');
        }
        async function rpcmain(){          
            rpc.on("ready", () => {
                if(askbtn == 'y'){
                    rpc.setActivity({
                        details: details,                
                        state: state,        
                        largeImageKey: largeImg,
                        smallImageKey: smallImg,
                        largeImageText: largeImgTxt,
                        smallImageText: smallImgTxt,
                        startTimestamp: timestamp,
                        buttons: [
                            {
                            'label': btn,
                            'url': btnurl
                            }
                        ]
                    })
                }else{
                    rpc.setActivity({
                        details: details,                
                        state: state,        
                        largeImageKey: largeImg,
                        smallImageKey: smallImg,
                        largeImageText: largeImgTxt,
                        smallImageText: smallImgTxt,
                        startTimestamp: timestamp,
                    })
                }
                console.log("RPC activeted"); 
            })

            rpc.login({
                clientId: clientID
            })
        }

        rpcmain()
    }

    else if(choice == 2){
        console.log('If you want any help join my discord server: https://discord.gg/vHWJnmNsgZ or dm me Lososik#3523')
        let returninput = prompt('[?]>')
        returninput = main()
    }else{
        console.log('Missclick???');
        sleep(1000);
        main()
    }
}

main()
