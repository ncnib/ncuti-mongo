import Api from '@/services/Api'

export default {
  fetchBenevoles() {
    return Api().get('benevoles')
  },

  addBenevole(params) {
    return Api().post('benevoles', params)
  },

  updateBenevole(params) {
    return Api().put('benevoles/' + params.id, params)
  },

  getBenevole(params) {
    return Api().get('benevole/' + params.id)
  },

  deleteBenevole(id) {
    return Api().delete('benevole/' + id)
  },

  listeBenevole() {
    return Api().get('benevoles/liste')
  }
}