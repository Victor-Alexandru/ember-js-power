import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: '1',
      name: 'Cfr Cluj',
      played: 0,
      won: 0,
      drown: 0,
      lost: 0,
      GF: 0,
      GA: 0,
      GD: 0,
      points: 0,
      form: [-1, -1, -1, -1, -1]
    }, {
      id: '2',
      name: 'FCSB',
      played: 0,
      won: 0,
      drown: 0,
      lost: 0,
      GF: 0,
      GA: 0,
      GD: 0,
      points: 0,
      form: [-1, -1, -1, -1, -1]
    }, {
      id: '3',
      name: 'CSU Craiova',
      played: 0,
      won: 0,
      drown: 0,
      lost: 0,
      GF: 0,
      GA: 0,
      GD: 0,
      points: 0,
      form: [-1, -1, -1, -1, -1]
    }];
  }
});
