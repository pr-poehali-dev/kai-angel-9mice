import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const albums = [
    {
      title: "HEAVY METAL",
      year: "2023",
      tracks: "12 треков",
      cover: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/6160003f-1b12-46c4-8e73-c2a581182926.jpg"
    },
    {
      title: "HEAVY METAL 2",
      year: "2024",
      tracks: "14 треков",
      cover: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/6160003f-1b12-46c4-8e73-c2a581182926.jpg"
    }
  ];

  const popularTracks = [
    "Ice + Alabaster",
    "Fire Alarm",
    "Ринопластика",
    "Phoenix",
    "Frank Ocean",
    "2017",
    "Tusa V.I.P.",
    "Hollywood Takeover"
  ];

  const concerts = [
    { date: "TBA 2024", city: "Москва", venue: "Скоро анонс" },
    { date: "TBA 2024", city: "Санкт-Петербург", venue: "Скоро анонс" }
  ];

  const merch = [
    {
      title: "Viperr Hoodie",
      price: "4990₽",
      image: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/3f6b0111-68cb-4df5-8fa7-5e00687be742.jpg"
    },
    {
      title: "Heavy Metal Tee",
      price: "2490₽",
      image: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/3f6b0111-68cb-4df5-8fa7-5e00687be742.jpg"
    },
    {
      title: "Angel Cap",
      price: "1990₽",
      image: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/3f6b0111-68cb-4df5-8fa7-5e00687be742.jpg"
    }
  ];

  return (
    <div className="min-h-screen gradient-dark text-foreground">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black tracking-wider text-white gothic-text-shadow">
              VIPERR
            </h1>
            <span className="text-xs text-gray-400">kai angel × 9mice</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#bio" className="text-white hover:text-gray-300 transition-colors font-medium">О них</a>
            <a href="#music" className="text-white hover:text-gray-300 transition-colors font-medium">Музыка</a>
            <a href="#concerts" className="text-white hover:text-gray-300 transition-colors font-medium">Концерты</a>
            <a href="#merch" className="text-white hover:text-gray-300 transition-colors font-medium">Мерч</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl bg-white animate-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-white animate-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/735fd0f6-38bd-4ab0-b328-e4776e2c8233.jpg" 
                alt="Kai Angel & 9mice" 
                className="rounded-lg shadow-2xl gothic-shadow border border-white/10"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-6xl md:text-7xl font-black mb-4 text-white gothic-text-shadow">
                  KAI ANGEL
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <span className="text-2xl text-white">×</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
                <h2 className="text-6xl md:text-7xl font-black mb-6 text-white gothic-text-shadow">
                  9MICE
                </h2>
              </div>
              <p className="text-xl text-gray-300 font-light">
                Русскоязычный рэп-дуэт, также известный как <span className="text-white font-bold">Viperr</span>
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold">
                  <Icon name="Play" size={20} className="mr-2" />
                  Слушать на Spotify
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black">
                  <Icon name="Music" size={20} className="mr-2" />
                  Apple Music
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bio" className="py-20 px-6 bg-black/40">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-black mb-12 text-center text-white gothic-text-shadow">История</h3>
          <div className="space-y-6 text-lg leading-relaxed">
            <Card className="bg-black/60 border-white/10 backdrop-blur-sm gothic-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/20 flex-shrink-0 bg-white/5">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-white">Знакомство в 2022</h4>
                    <p className="text-gray-300">
                      Kai Angel и 9mice познакомились в интернете в 2022 году, обнаружив схожие татуировки со словом "angel" на шеях. 
                      Это стало началом их творческого союза под названием Viperr.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-white/10 backdrop-blur-sm gothic-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/20 flex-shrink-0 bg-white/5">
                    <Icon name="Disc3" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-white">Стиль и звучание</h4>
                    <p className="text-gray-300">
                      Дуэт работает в жанрах trap, cloud rap и экспериментального хип-хопа, 
                      создавая уникальное звучание с мрачной эстетикой и современным саунд-дизайном.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="music" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-black mb-4 text-center text-white gothic-text-shadow">Дискография</h3>
          <p className="text-center text-gray-400 mb-12 text-lg">Альбомы и популярные треки</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {albums.map((album, index) => (
              <Card key={index} className="bg-black/60 border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm gothic-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={album.cover} 
                      alt={album.title}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Play" size={64} className="text-white mx-auto mb-2" />
                        <p className="text-white font-bold">Слушать альбом</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-black mb-2 text-white">{album.title}</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400">{album.year}</p>
                      <p className="text-gray-400">{album.tracks}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h4 className="text-3xl font-bold mb-6 text-center text-white">Популярные треки</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {popularTracks.map((track, index) => (
                <Card key={index} className="bg-black/40 border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                        <Icon name="Music" size={18} className="text-white" />
                      </div>
                      <span className="font-medium text-white">{track}</span>
                    </div>
                    <Icon name="Play" size={20} className="opacity-50 group-hover:opacity-100 transition-opacity text-white" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="concerts" className="py-20 px-6 bg-black/40">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-black mb-4 text-center text-white gothic-text-shadow">Концерты</h3>
          <p className="text-center text-gray-400 mb-12">Следите за анонсами в социальных сетях</p>
          <div className="space-y-4">
            {concerts.map((concert, index) => (
              <Card key={index} className="bg-black/60 border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm gothic-shadow">
                <CardContent className="p-6 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/20 bg-white/5">
                      <Icon name="Calendar" size={28} className="text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">{concert.date}</p>
                      <p className="text-gray-400">{concert.city} • {concert.venue}</p>
                    </div>
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    <Icon name="Bell" size={18} className="mr-2" />
                    Уведомить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="merch" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-black mb-4 text-center text-white gothic-text-shadow">Мерч</h3>
          <p className="text-center text-gray-400 mb-12 text-lg">Официальная одежда Viperr</p>
          <div className="grid md:grid-cols-3 gap-8">
            {merch.map((item, index) => (
              <Card key={index} className="bg-black/60 border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm gothic-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-2xl font-black mb-4 text-white">{item.price}</p>
                    <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10 bg-black/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center flex-wrap gap-8">
            <div>
              <h4 className="text-2xl font-black mb-2 text-white gothic-text-shadow">
                VIPERR
              </h4>
              <p className="text-gray-400 text-sm mb-1">kai angel × 9mice</p>
              <p className="text-gray-400 text-sm">© 2024 Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-white/20 hover:border-white/40 bg-white/5">
                <Icon name="Music" size={24} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-white/20 hover:border-white/40 bg-white/5">
                <Icon name="Instagram" size={24} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-white/20 hover:border-white/40 bg-white/5">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
