let video = []

video[1] = []
video[1] ['nome'] = 'Attack on Titan'
video[1] ['categoria'] = 'Anime'

function getVideo(video) {

    try {
        console.log(video[0]['nome'])
    } catch {
        console.log('Agora vamos tratar o erro ')
    } finally {
         console.log('Sempre passa por aqui')
    } 

    console.log('A aplicação não morreu')
}

getVideo(video)