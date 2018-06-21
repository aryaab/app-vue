import platziMusicService from './platzi-music'
const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return platziMusicService.get('/search', 
    { params: {
      q: q,
      type: type }
    })
    .then((res) => res.data) 
    // Si es una sola línea, puedo no usar llaves, y no usar return 
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
