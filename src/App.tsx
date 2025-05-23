import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Building2, Truck, Brush, Users } from "lucide-react"

function App() {
  const whatsappLink = "https://wa.me/1234567890" // Замените на реальный номер WhatsApp
  const email = "Tatiana.kostina2009@gmail.com"

  return (
    <div className="min-h-svh bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">ООО Симбат</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-green-500 hover:bg-green-600">
                <Phone className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
            <a href={`mailto:${email}`}>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" /> Написать
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ваши задачи — наше решение!</h2>
          <p className="text-xl mb-8">Перевозки, клининг и подбор персонала от ООО "Симбат"</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              Заказать услугу
            </Button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-blue-600" /> Перевозки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Надежные и быстрые перевозки для вашего бизнеса и личных нужд.</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button>Заказать</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brush className="h-6 w-6 text-blue-600" /> Клининговые услуги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Уборка коттеджей, магазинов, торговых центров и подъездов.</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button>Заказать</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" /> Подбор персонала
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Профессиональный подбор сотрудников для вашего бизнеса.</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button>Заказать</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты и реквизиты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контакты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-600">{email}</a></p>
                <p className="mb-4"><strong>WhatsApp:</strong> <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-600">Написать в WhatsApp</a></p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600">Связаться</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Реквизиты</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Наименование:</strong> ООО "Симбат"</p>
                <p><strong>Расчетный счет:</strong> 40702810316750000494</p>
                <p><strong>Наименование банка:</strong> ПАО Сбербанк</p>
                <p><strong>Корр. счет:</strong> 30101810500000000674</p>
                <p><strong>БИК:</strong> 046577674</p>
                <p className="mt-2 text-sm text-gray-600">*Пополнение счета доступно сразу, остальные операции — после проверки документов в течение 1 рабочего дня.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 ООО "Симбат". Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App