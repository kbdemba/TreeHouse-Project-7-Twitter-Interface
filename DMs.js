const DMs = { events:
   [ { type: 'message_create',
       id: '1003382154431205392',

       created_timestamp: '1528059922212',
       message_create: { target: { recipient_id: '916884877244583937' },
         sender_id: '855283763017793536',
         message_data:
          { text: 'Strive for greatness',
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] } } } },
     { type: 'message_create',
       id: '1003381069880668164',
       created_timestamp: '1528059663635',
       message_create: { target: { recipient_id: '855283763017793536' },

         sender_id: '916884877244583937',
         source_app_id: '129032',
         message_data:
          { text: 'Testing for a teamTreehouse project 7..',
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] } } } } ],
  apps:
   { '129032':
      { id: '129032',
        name: 'Twitter for iPhone',
        url: 'http://twitter.com/download/iphone' } } }


//////////////////////////  console.log(data.events[1].message_create)

// { target: { recipient_id: '916884877244583937' },
//   sender_id: '855283763017793536',
//   message_data:
//    { text: 'Strive for greatness',
//      entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] } } }
// /////// second one
//  { target: { recipient_id: '855283763017793536' },
//
//    sender_id: '916884877244583937',
//    source_app_id: '129032',
//    message_data:
//     { text: 'Testing for a teamTreehouse project 7..',
//       entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] } } }
module.exports = DMs;
