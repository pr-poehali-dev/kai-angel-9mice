import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const albums = [
    {
      title: "NEON DREAMS",
      year: "2024",
      cover: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/6160003f-1b12-46c4-8e73-c2a581182926.jpg"
    },
    {
      title: "NIGHT CITY",
      year: "2023",
      cover: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/6160003f-1b12-46c4-8e73-c2a581182926.jpg"
    },
    {
      title: "URBAN VIBES",
      year: "2023",
      cover: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/6160003f-1b12-46c4-8e73-c2a581182926.jpg"
    }
  ];

  const concerts = [
    { date: "15 ноября 2024", city: "Москва", venue: "Adrenaline Stadium" },
    { date: "22 ноября 2024", city: "Санкт-Петербург", venue: "A2 Green Concert" },
    { date: "5 декабря 2024", city: "Казань", venue: "Пирамида" }
  ];

  const merch = [
    {
      title: "Hoodie Black",
      price: "4990₽",
      image: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/3f6b0111-68cb-4df5-8fa7-5e00687be742.jpg"
    },
    {
      title: "T-Shirt Neon",
      price: "2490₽",
      image: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/3f6b0111-68cb-4df5-8fa7-5e00687be742.jpg"
    },
    {
      title: "Cap Urban",
      price: "1990₽",
      image: "https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/3f6b0111-68cb-4df5-8fa7-5e00687be742.jpg"
    }
  ];

  return (
    <div className="min-h-screen gradient-dark text-foreground">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/30 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-wider" style={{ color: '#FF006E' }}>
            KAI ANGEL <span style={{ color: '#00F0FF' }}>&</span> 9MICE
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#bio" className="hover:text-primary transition-colors">Биография</a>
            <a href="#music" className="hover:text-secondary transition-colors">Музыка</a>
            <a href="#concerts" className="hover:text-accent transition-colors">Концерты</a>
            <a href="#merch" className="hover:text-primary transition-colors">Мерч</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-glow" style={{ background: '#FF006E' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-glow" style={{ background: '#00F0FF', animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-7xl md:text-8xl font-black mb-6 neon-glow" style={{ color: '#FF006E' }}>
              KAI ANGEL
            </h2>
            <h2 className="text-7xl md:text-8xl font-black mb-8 neon-glow" style={{ color: '#00F0FF' }}>
              & 9MICE
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
              Новая волна российского рэпа
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="neon-border" style={{ background: '#FF006E', color: 'white' }}>
                <Icon name="Play" size={20} className="mr-2" />
                Слушать
              </Button>
              <Button size="lg" variant="outline" className="border-2" style={{ borderColor: '#00F0FF', color: '#00F0FF' }}>
                <Icon name="Ticket" size={20} className="mr-2" />
                Билеты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="bio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-black mb-12 text-center" style={{ color: '#8B00FF' }}>Биография</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/7172d53f-929c-4dd9-9649-8d34196f5a90/files/c941686e-0dd1-4e7d-b82d-2f434bae81e7.jpg" 
                alt="Kai Angel & 9mice" 
                className="rounded-lg neon-border shadow-2xl"
                style={{ borderColor: '#FF006E' }}
              />
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#FF006E' }}>Kai Angel</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Один из самых ярких представителей новой волны русского рэпа. 
                  Известен своим уникальным стилем, сочетающим trap, cloud rap и экспериментальные звучания.
                  Его тексты затрагивают темы урбанистической жизни, личных переживаний и современной молодежной культуры.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#00F0FF' }}>9mice</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Продюсер и артист, создающий атмосферные биты и мелодичные композиции.
                  Его музыка отличается глубоким звучанием и вниманием к деталям.
                  Вместе с Kai Angel они создают неповторимую атмосферу современного урбанистического звучания.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="music" className="py-20 px-6 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-black mb-12 text-center" style={{ color: '#00F0FF' }}>Музыка</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={album.cover} 
                      alt={album.title}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Icon name="Play" size={48} style={{ color: '#FF006E' }} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{album.title}</h4>
                    <p className="text-muted-foreground">{album.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="concerts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-black mb-12 text-center" style={{ color: '#FF006E' }}>Концерты</h3>
          <div className="space-y-4">
            {concerts.map((concert, index) => (
              <Card key={index} className="bg-card border-border hover:border-secondary transition-all duration-300">
                <CardContent className="p-6 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center neon-border" style={{ borderColor: '#00F0FF', background: 'rgba(0, 240, 255, 0.1)' }}>
                      <Icon name="Calendar" size={28} style={{ color: '#00F0FF' }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold">{concert.date}</p>
                      <p className="text-muted-foreground">{concert.city} • {concert.venue}</p>
                    </div>
                  </div>
                  <Button className="neon-border" style={{ background: '#8B00FF', color: 'white' }}>
                    <Icon name="Ticket" size={18} className="mr-2" />
                    Купить билет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="merch" className="py-20 px-6 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-black mb-12 text-center" style={{ color: '#8B00FF' }}>Мерч</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {merch.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-2xl font-black" style={{ color: '#FF006E' }}>{item.price}</p>
                    <Button className="w-full mt-4" style={{ background: '#00F0FF', color: '#000' }}>
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

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center flex-wrap gap-8">
            <div>
              <h4 className="text-2xl font-black mb-4" style={{ color: '#FF006E' }}>
                KAI ANGEL <span style={{ color: '#00F0FF' }}>&</span> 9MICE
              </h4>
              <p className="text-muted-foreground">© 2024 Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 neon-border" style={{ borderColor: '#FF006E' }}>
                <Icon name="Music" size={24} style={{ color: '#FF006E' }} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 neon-border" style={{ borderColor: '#00F0FF' }}>
                <Icon name="Instagram" size={24} style={{ color: '#00F0FF' }} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 neon-border" style={{ borderColor: '#8B00FF' }}>
                <Icon name="Twitter" size={24} style={{ color: '#8B00FF' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
