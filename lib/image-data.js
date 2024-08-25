const photos = [
    {
      id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=53",
        name: "Alex B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=54",
        name: "Brian Xelo",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "8265198d-e2e1-4221-addc-8244f39fdd62",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1508459855340-fb63ac591728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=55",
        name: "Ceza Des",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "8265198d-e2e1-4221-addc-8244f39fdd62",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=55",
        name: "Ceza Des",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=56",
        name: "Karim Bulletin",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
      title: "The White Warmth",
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "flower", "green"],
      views: "6M",
      share: "2.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=57",
        name: "Madan PA",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 120
      },
      likes: 80
    },
    {
      id: "6bea51c4-1123-425f-90c9-9148724872e5",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=58",
        name: "Moina Lam",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=59",
        name: "Nat B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=60",
        name: "Taral X",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=60",
        name: "Taral X",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1420745981456-b95fe23f5753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1438786657495-640937046d18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    
    
  ];
  
  const getAllPhotos = () => {
    return photos.map(({ id, title, url }) => ({ id, title, url }));
  
  }
  
  const getPhotoById = (id) => {
    return photos.find(photo => photo.id === id);
  }
  
  export {
    getAllPhotos,
    getPhotoById
  }