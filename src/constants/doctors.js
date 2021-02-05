const data = [
    {
      id: '1',
      name: 'Dr. Brain Wofe',
      specialisation: 'Psychologist',
      img:
        'https://www.allsmilesdentist.com/wp-content/uploads/2017/08/Doctors-circle.png',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'brain@hotmail.com',
      contact_no: '123456788',
      timing:'4:30 PM - 8:30 PM',
      fee:'$15/session',
      stars:5
    },
    {
      id: '2',
      name: 'Dr. Selkon Kane',
      specialisation: 'Psychiatrist',
      img:
        'https://www.ayurvedaconsultants.com/frontEndFiles/images/doctor-circle.jpg',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'kane_selkon12@gmail.com',
      contact_no: '123456788',
      timing:'5:30 PM - 9:30 PM',
      fee:'$10/session',
      stars:5

    },
    {
      id: '3',
      name: 'Dr. SN Mohanty',
      specialisation: 'Counsellor',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUi3Cot4kn3qaJfO7i9b4gWrs-f2OHUH7tfQ&usqp=CAU',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:5
    },
    {
      id: '8',
      name: 'Kate Williams',
      specialisation: 'Social Worker',
      img:
        'https://images.squarespace-cdn.com/content/v1/5e24e80299d8c23d1391ff77/1580455910868-CFM7L73ID2TJ36JNYRZX/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmN9YSRtfoTLg6dUq-6F17A0FFZK5fArcnK1IqGweyunyWChwIwkIJ_P7MaZif-uMs/Amber-Chow-Career-Counsellor-Burnaby-Circle.png',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:5
    },
    {
      id: '4',
      name: 'Dr. SN Kalra',
      specialisation: 'Psychologist',
      img:
        'https://www.shorelinevision.com/wp-content/uploads/2019/02/circle-metzger-1.png',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:4
    },
    
    {
      id: '5',
      name: 'Dr. David Bing',
      specialisation: 'Psychologist',
      img:
        'https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-Roaj-Ujjin-MD-250584-circle_large__v1__.png',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:4
    },
    {
      id: '6',
      name: 'Dr. Sheron Odell',
      specialisation: 'Psychologist',
      img:
        'https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Sharon-Odell-MD-196593-circle_large__v1__.png',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:4
    },
    {
      id: '7',
      name: 'Dr. SN Mohanty',
      specialisation: 'Psychologist',
      img:
        'https://d1k13df5m14swc.cloudfront.net/photos/Dr-Alesia-Billingslea-MD-196199-circle_large__v1__.png',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:4
    },
    
    {
      id: '9',
      name: 'Kate Williams',
      specialisation: 'Social Worker',
      img:
        'https://images.squarespace-cdn.com/content/v1/5b162a5675f9ee6cc62c56b5/1601793942036-7PND92YGYSCQV9IBJLYW/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Erin+Davidson+Sex+Therapy+Therapist+Ethical+Non-Monogamy+Registered+Clinical+Counsellor+Vancouver+Therapy+Therapist+Allura+Centre',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:5
    },
    {
      id: '10',
      name: 'Dr. Pheebs ',
      specialisation: 'Psychiatrist',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGPKpoXU-VTjl7fBZ1ej-BR4GgDlVInVjdEg&usqp=CAU',
      bio:
        'Excepteur velit dolore nostrud do minim eiusmod esse ipsum officia deserunt. Nulla non veniam minim veniam. Sit nostrud minim voluptate ullamco ullamco esse ad sunt.',
      email: 'official_sn1889@gmail.com',
      contact_no: '12345688',
      timing:'5:00 PM - 9:00 PM',
      fee:'$15/session',
      stars:4
    },
  ];
  
  export default data;