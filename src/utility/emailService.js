import emailjs from "emailjs-com"

export function sendEmail(details){
    emailjs.send("service_9uxyfmq","template_rncluzf",details,"UrsF8yuhX3Ld-oX50").then((result)=>{
        console.log("data" + result.text)
    }, (error)=>{
        console.log(error.text)
    })
}