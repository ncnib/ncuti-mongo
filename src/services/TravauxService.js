import Api from '@/services/Api'

export default {
  listTravaux() {
    return Api().get('travaux')
  },

  addTravail(params) {
    return Api().post('travaux', params)
  },

  updateTravail(params) {
    return Api().put('travaux/' + params.id, params)
  },

  addEvent(params) {
    return Api().put('travaux/event', params)
  },

  addTemps(params) {
    return Api().put('travaux/temps', params)
  },
  
  deleteTravaux(id) {
    return Api().delete('travaux/' + id)
  },

  getTravaux(params) {
    return Api().get('travaux/' + params.id)
  }
  
}