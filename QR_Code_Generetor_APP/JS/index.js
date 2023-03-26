const download = document.querySelector('a.download')
const dark = document.querySelector('input.dark')
const light = document.querySelector('input.light')
const QRCONT = document.querySelector('div#qr-code')
const QRtext = document.querySelector('input.qr-text')
const share = document.querySelector('button.share-btn')
const sizes = document.querySelector('select#sizes')

dark.addEventListener('input', handleDarkColor)
light.addEventListener('input', handleLightColor)
QRtext.addEventListener('input', handleQRText)
sizes.addEventListener('change', handleSize)
share.addEventListener('click', handleShare)

const defaultUrl = "https://youtube.com/@AsmrProg"
let colorLight = "#fff",
    colorDark = "#000",
    text = defaultUrl,
    size = 300

function handleDarkColor(e)
{
    colorDark = e.target.value
    generateQRCode()
}

function handleLightColor(e)
{
    colorLight = e.target.value
    generateQRCode()
}

function handleQRText(e)
{
    const value = e.target.value
    text = value
    if(!value){
        text = defaultUrl
    }
    generateQRCode()
}

async function generateQRCode()
{
    QRCONT.innerHTML = ''
    new QRCode('qr-code', {
        text,
        height: size,
        width: size,
        colorLight,
        colorDark
    })
    download.href = await resolveDataUrl()
}

async function handleShare(){
    setTimeout(async () => {
        try
        {
            const base64url = await resolveDataUrl()
            const blob = await (await fetch(base64url)).blob
            const file = new File([blob], "QRCode.png", {
                 type: blob.type,
            })
        }catch (error){
            alert('Seu navegador não tem suporte a compartilhar')
        }
    }, 100)
}

function handleSize(e)
{
    size = e.target.value
    generateQRCode()
}

function resolveDataUrl()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img =  document.querySelector('#qr-code img')
            if(img.curretScr)
            {
                resolve(img.curretScr)
                return
            }
            const canvas = document.querySelector('canvas')
            resolve(canvas.toDataURL())
        })
    })
}

generateQRCode()