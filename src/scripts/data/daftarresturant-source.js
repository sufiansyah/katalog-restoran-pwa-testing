import API_ENDPOINT from '../globals/api-endpoint';

class DaftarResturant {
  static async daftarResturant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResturant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async reviewResturant(id) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded | application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(id),
    });
    return response;
  }
}

export default DaftarResturant;
