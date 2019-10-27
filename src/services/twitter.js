import Http from './http';

export default class Twitter {
  constructor(pos = null) {
    this.pos = pos || {};
    this.http = new Http('/api/gigs-twitter');
  }

  async loadData(q = '') {
    try {
      const { latitude, longitude } = this.pos;
      const pos = latitude
        ? {
            latitude: Number(latitude),
            longitude: Number(longitude)
          }
        : false;

      const { response } = await this.http.makeRequest({
        url: '/gigs',
        method: 'post',
        data: {
          q,
          pos
        }
      });

      return response.data.tweets;
    } catch (error) {
      throw error;
    }
  }
}
