import emailjs from "emailjs-com"

export function sendEmail(details){
    emailjs.send("service_g8luixi","template_d8cacal",details,"uldQTJNmgX9pi4rNX").then((result)=>{
        console.log("data" + result.text)
    }, (error)=>{
        console.log(error.text)
    })
}