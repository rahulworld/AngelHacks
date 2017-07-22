 $(function(){
  var currencies = [
    { value: 'Divorce', data: 'Divorce, also known as dissolution of marriage, is the termination of a marriage or marital union, the canceling or reorganizing of the legal duties and responsibilities of marriage, thus dissolving the bonds of matrimony between a married couple under the rule of law of the particular country or state. Divorce laws vary considerably around the world, but in most countries divorce requires the sanction of a court or other authority in a legal process, which may involve issues of alimony (spousal support), child custody, child visitation / access, parenting time, child support, distribution of property, and division of debt. In most countries, monogamy is required by law, so divorce allows each former partner to marry another person; where polygyny is legal but polyandry is not, divorce allows the woman to marry a new husband. Grounds for divorce vary widely from country to country.Marriage may be seen as a contract, a status, or a combination of these.' },
    { value: 'Traffic', data: 'Traffic on roads consists of road users including pedestrians, ridden or herded animals, vehicles, streetcars, buses and other conveyances, either singly or together, while using the public way for purposes of travel. Traffic laws are the laws which govern traffic and regulate vehicles, while rules of the road are both the laws and the informal rules that may have developed over time to facilitate the orderly and timely flow of traffic.Organized traffic generally has well-established priorities, lanes, right-of-way, and traffic control at intersections.' },
    { value: 'Murder', data: 'DZD' },
    { value: 'Stealing', data: 'EUR' },
    { value: 'Rape', data: 'AOA' },
    { value: 'Criminal act', data: 'XCD' },
    { value: 'Rent', data: 'ARS' },
    { value: 'Car Parking', data: 'AMD' },
  ];

  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });


});
