import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import hero from "@/assets/hero.jpg";
import boxes from "@/assets/boxes.jpg";
import tags from "@/assets/tags.jpg";
import nativity from "@/assets/nativity.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natal Criativo para Imprimir — 150 modelos de lembrancinhas" },
      { name: "description", content: "Caixinhas, embalagens, sacolinhas, tags e cartões de Natal para imprimir, recortar e montar. 5 módulos + 2 bônus." },
      { property: "og:title", content: "Natal Criativo para Imprimir" },
      { property: "og:description", content: "Transforme folhas de papel em lindas lembrancinhas de Natal. 5 módulos + 2 bônus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const goPlans = () => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });

function Cta({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "light" }) {
  const cls = variant === "light" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground";
  return (
    <button onClick={goPlans} className={`${cls} shadow-warm inline-block rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide transition hover:-translate-y-0.5 hover:brightness-110 md:text-lg`}>
      {children}
    </button>
  );
}

function H2({ children, light }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`font-display text-3xl font-extrabold leading-tight md:text-5xl ${light ? "text-secondary-foreground" : "text-secondary"}`}>{children}</h2>;
}

const Check = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3"><span className="font-bold text-secondary">✓</span><span>{children}</span></li>
);

const categories = [
  ["🎄", "Caixinhas Natalinas", "Modelos de caixinhas decorativas para pequenos presentes, doces e lembrancinhas."],
  ["🍫", "Embalagens para Chocolates e Doces", "Embalagens natalinas para personalizar chocolates, bombons e pequenas guloseimas."],
  ["🎁", "Sacolinhas e Lembrancinhas", "Sacolinhas e moldes para preparar lembranças de Natal para diferentes ocasiões."],
  ["🏷️", "Tags e Etiquetas", "Etiquetas decorativas para identificar presentes e personalizar suas embalagens."],
  ["💌", "Cartões de Natal", "Cartões ilustrados com mensagens natalinas para acompanhar presentes e lembrancinhas."],
];

const modules = [
  ["Caixinhas Natalinas", "Crie caixinhas para complementar presentes e preparar pequenas lembrancinhas.", "Modelos com desenhos e elementos natalinos para imprimir e montar."],
  ["Embalagens para Chocolates e Doces", "Transforme a apresentação de chocolates e doces com embalagens temáticas de Natal.", "Uma opção para presentear amigos, familiares, alunos e outras pessoas especiais."],
  ["Sacolinhas e Lembrancinhas", "Tenha modelos de sacolinhas e lembrancinhas para diferentes ocasiões natalinas.", "Prepare pequenos presentes personalizados para confraternizações, encontros e comemorações."],
  ["Tags e Etiquetas", "Dê um toque especial às suas embalagens com tags e etiquetas decorativas.", "Utilize os modelos para identificar presentes e complementar suas lembrancinhas."],
  ["Cartões de Natal", "Compartilhe mensagens de carinho através de cartões natalinos ilustrados.", "Uma maneira de acompanhar seus presentes com palavras especiais."],
];

const faqs = [
  ["Como vou receber o material?", "Você receberá as informações para acessar os arquivos pelo e-mail informado na compra, após a confirmação do pagamento."],
  ["O material é físico ou digital?", "O produto é totalmente digital. Você receberá arquivos para imprimir, recortar e montar. Nenhuma lembrancinha física será enviada."],
  ["Quantos modelos estão incluídos?", "A coleção completa está sendo preparada com uma meta inicial de 150 modelos. A quantidade final será confirmada antes da disponibilização da oferta."],
  ["Preciso ter experiência com papelaria?", "Não é necessário ter experiência profissional. O guia incluído no plano completo apresenta orientações para impressão, recorte e montagem. Alguns projetos podem exigir mais cuidado e prática."],
  ["Posso imprimir em casa?", "Sim, desde que tenha uma impressora compatível com os arquivos e o papel utilizado. Você também poderá realizar a impressão em uma gráfica."],
  ["Qual papel devo utilizar?", "Isso depende do material escolhido. Para peças que precisam de firmeza, papéis de maior gramatura costumam ser mais adequados."],
  ["Os dois bônus estão incluídos?", "Sim. A Coleção de Natal Cristão e o Guia de Impressão, Corte e Montagem estão incluídos no Plano Completo."],
  ["Posso vender as lembrancinhas que produzir?", "As condições de uso comercial ainda serão definidas. Antes da compra, consulte a licença de uso disponibilizada junto à oferta."],
  ["Existe alguma garantia?", "Sim. A oferta conta com garantia de 7 dias, conforme as condições de compra."],
];

function ExitPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("natal-popup")) {
        sessionStorage.setItem("natal-popup", "1");
        setOpen(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4" onClick={() => setOpen(false)}>
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border-4 border-accent bg-card p-8 text-center" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-display text-3xl font-extrabold text-primary">🎁 Uma condição especial para você!</h3>
        <p className="mt-3 text-muted-foreground">Antes de sair, que tal aproveitar uma condição diferente para acessar sua coleção?</p>
        <p className="mt-5 font-bold text-secondary">Coleção Completa de Natal</p>
        <p className="text-muted-foreground">De <s>R$ 29,90</s></p>
        <p className="font-display text-5xl font-extrabold text-primary">Por R$ 14,90</p>
        <p className="mt-2 text-sm">Receba os cinco módulos e os dois bônus especiais.</p>
        <ul className="mx-auto mt-4 space-y-1 text-left text-sm">
          {categories.map((c) => <Check key={c[1]}>{c[1]}.</Check>)}
          <li>🎁 Coleção de Natal Cristão.</li>
          <li>🎁 Guia de Impressão, Corte e Montagem.</li>
        </ul>
        <button onClick={() => { setOpen(false); goPlans(); }} className="mt-6 w-full rounded-full bg-primary px-6 py-4 font-extrabold uppercase text-primary-foreground">Sim! Quero aproveitar por R$ 14,90</button>
        <p className="mt-3 text-xs text-muted-foreground">Pagamento único • Produto digital • Entrega por e-mail • Garantia de 7 dias</p>
        <button onClick={() => setOpen(false)} className="mt-3 text-sm text-muted-foreground underline">Não quero esta oferta</button>
      </div>
    </div>
  );
}

function Index() {
  const [faq, setFaq] = useState<number | null>(0);
  return (
    <main className="font-sans text-foreground">
      {/* HERO */}
      <section className="bg-festive text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="font-display text-xl font-extrabold text-accent">🎄 NATAL CRIATIVO PARA IMPRIMIR</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest opacity-80">Caixinhas, embalagens, sacolinhas, tags e cartões de Natal</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl">Transforme Simples Folhas de Papel em Lindas Lembrancinhas de Natal!</h1>
            <p className="mt-5 text-lg opacity-90">Tenha acesso a uma coleção de modelos natalinos para imprimir, recortar e montar, sem precisar criar cada arte do zero.</p>
            <p className="mt-3 opacity-90">Prepare caixinhas, embalagens para chocolates, sacolinhas, etiquetas e cartões para presentear familiares, amigos, alunos, clientes e pessoas especiais.</p>
            <p className="mt-5 rounded-2xl bg-accent/20 p-4 font-bold">🎁 Coleção planejada com 150 modelos, distribuídos em 5 módulos + 2 bônus especiais!</p>
            <div className="mt-6"><Cta variant="light">Quero meus materiais de Natal</Cta></div>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
              {["Arquivos digitais para imprimir", "Diferentes modelos natalinos", "Materiais para recortar e montar", "Recebimento por e-mail"].map((t) => <li key={t}><span className="text-accent">✓</span> {t}</li>)}
            </ul>
            <p className="mt-4 text-xs italic opacity-75">Produto 100% digital. Não há envio de materiais físicos.</p>
          </div>
          <img src={hero} width={1536} height={1024} alt="Lembrancinhas de Natal de papel" className="rounded-3xl border-4 border-accent shadow-2xl" />
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <H2>✂️ Veja como é simples: do papel à lembrancinha pronta!</H2>
        <p className="mt-4 text-muted-foreground">Com os arquivos da coleção, você poderá preparar suas próprias lembrancinhas seguindo quatro etapas.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[["Imprimir", "Escolha o modelo desejado e imprima no papel recomendado."], ["Recortar", "Recorte as peças seguindo os contornos do molde."], ["Dobrar", "Faça as dobras nas marcações para dar forma às peças."], ["Montar", "Cole ou encaixe as partes seguindo as orientações de montagem."]].map(([t, d], i) => (
            <div key={t} className="rounded-3xl border-2 border-dashed border-primary/40 bg-card p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-2xl font-extrabold text-primary-foreground">{i + 1}</div>
              <h3 className="mt-4 font-display text-xl font-extrabold uppercase text-secondary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-bold text-primary">Escolha, imprima, recorte e dê vida às suas ideias de Natal!</p>
      </section>

      {/* CREATE */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <H2>🎁 Veja o que você poderá criar neste Natal!</H2>
            <p className="mt-4 text-muted-foreground">Uma coleção de materiais para deixar seus presentes ainda mais especiais.</p>
          </div>
          <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
            <img src={boxes} loading="lazy" width={1024} height={1024} alt="Caixinhas e embalagens de chocolate natalinas" className="rounded-3xl shadow-warm" />
            <div className="space-y-4">
              {categories.map(([e, t, d]) => (
                <div key={t} className="flex gap-4 rounded-2xl bg-card p-4">
                  <span className="text-3xl">{e}</span>
                  <div><h3 className="font-extrabold text-secondary">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center"><Cta>Quero acessar a coleção de Natal</Cta></div>
        </div>
      </section>

      {/* MODULES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <H2>🎅 Conheça os 5 módulos da sua coleção!</H2>
          <p className="mt-4 text-muted-foreground">Os materiais são organizados por categoria, facilitando a escolha do que você deseja produzir.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(([t, a, b], i) => (
            <div key={t} className="rounded-3xl border-t-8 border-primary bg-card p-6 shadow-warm">
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Módulo 0{i + 1}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-secondary">{t}</h3>
              <p className="mt-3 text-sm">{a}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
          <div className="flex items-center rounded-3xl bg-festive p-6 font-display text-2xl font-extrabold text-secondary-foreground">Cinco categorias para explorar diferentes possibilidades de criação neste Natal!</div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-festive py-20 text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <H2 light>❤️ Para quem é esta coleção?</H2>
            <p className="mt-4 opacity-90">O Natal Criativo para Imprimir é uma opção para quem gosta de preparar presentes com criatividade e carinho.</p>
            <ul className="mt-6 space-y-3">
              {[["Para famílias:", "que desejam preparar lembranças personalizadas para pessoas queridas."], ["Para professores:", "que procuram materiais natalinos para presentear alunos ou colegas."], ["Para igrejas e comunidades:", "que desejam criar lembrancinhas para celebrações de Natal."], ["Para empresas:", "que querem preparar presentes e embalagens personalizadas para sua equipe ou clientes."], ["Para quem ama artesanato:", "e gosta de transformar papel em projetos criativos."]].map(([a, b]) => (
                <li key={a} className="rounded-2xl bg-secondary-foreground/10 p-4"><strong className="text-accent">{a}</strong> {b}</li>
              ))}
            </ul>
          </div>
          <img src={tags} loading="lazy" width={1024} height={1024} alt="Tags, sacolinhas e cartões de Natal" className="rounded-3xl border-4 border-accent" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <H2>✨ Mais criatividade para seus presentes de Natal!</H2>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
          {[["Modelos preparados para impressão", "Escolha o material desejado e utilize os arquivos, sem precisar criar os desenhos do zero."], ["Diferentes categorias em uma coleção", "Explore caixinhas, embalagens, sacolinhas, tags e cartões."], ["Possibilidades de personalização", "Combine materiais, cores e acabamentos para deixar cada lembrancinha com um toque especial."], ["Materiais para diferentes ocasiões", "Prepare lembrancinhas para reuniões familiares, escolas, igrejas e confraternizações."]].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-card p-6 shadow-warm"><h3 className="font-display text-xl font-extrabold text-primary">✨ {t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <H2>🎁 E você ainda recebe 2 bônus especiais!</H2>
            <p className="mt-4 text-muted-foreground">Além dos cinco módulos principais, a coleção completa inclui dois materiais complementares.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-card shadow-warm">
              <img src={nativity} loading="lazy" width={1024} height={1024} alt="Cartões de Natal cristão" className="aspect-video w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Bônus 01</p>
                <h3 className="font-display text-2xl font-extrabold text-secondary">Coleção de Natal Cristão</h3>
                <p className="mt-2 font-bold">Celebre o verdadeiro significado do Natal!</p>
                <p className="mt-2 text-sm text-muted-foreground">Uma coleção com desenhos e mensagens cristãs que valorizam o nascimento de Jesus.</p>
                <p className="mt-2 text-sm text-muted-foreground">Materiais com presépios, estrela de Belém e mensagens de fé, amor, paz e esperança.</p>
                <p className="mt-2 text-sm text-muted-foreground">Ideal para acompanhar presentes e lembrancinhas de celebrações cristãs.</p>
                <span className="mt-4 inline-block rounded-full bg-accent px-4 py-1 text-xs font-extrabold">INCLUÍDO NO PLANO COMPLETO</span>
              </div>
            </div>
            <div className="rounded-3xl bg-card p-6 shadow-warm">
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Bônus 02</p>
              <h3 className="font-display text-2xl font-extrabold text-secondary">Guia de Impressão, Corte e Montagem</h3>
              <p className="mt-2 font-bold">Orientações para preparar suas lembrancinhas!</p>
              <p className="mt-2 text-sm text-muted-foreground">Um guia com informações sobre:</p>
              <ul className="mt-3 space-y-2">
                {["Escolha do papel.", "Configurações de impressão.", "Linhas de recorte.", "Marcações de dobra.", "Abas para colagem.", "Dicas de montagem e acabamento."].map((t) => <Check key={t}>{t}</Check>)}
              </ul>
              <span className="mt-4 inline-block rounded-full bg-accent px-4 py-1 text-xs font-extrabold">INCLUÍDO NO PLANO COMPLETO</span>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="mx-auto max-w-5xl scroll-mt-6 px-5 py-20">
        <div className="text-center">
          <H2>🎄 Escolha seu plano e comece a criar!</H2>
          <p className="mt-4 text-muted-foreground">Pagamento único. Material digital entregue por e-mail após a confirmação da compra.</p>
        </div>
        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-border bg-card p-8">
            <h3 className="font-display text-2xl font-extrabold text-secondary">PLANO BÁSICO</h3>
            <p className="mt-2 text-sm text-muted-foreground">Uma opção de entrada para começar a criar suas lembrancinhas.</p>
            <p className="mt-6 font-display text-5xl font-extrabold">R$ 10,00</p>
            <p className="text-sm text-muted-foreground">Pagamento único.</p>
            <p className="mt-4 text-sm">Uma seleção de modelos natalinos para começar.</p>
            <ul className="mt-4 space-y-2"><Check>Arquivos digitais para imprimir.</Check><Check>Recebimento por e-mail.</Check></ul>
            <button className="mt-8 w-full rounded-full border-2 border-secondary px-6 py-4 font-extrabold uppercase text-secondary hover:bg-secondary hover:text-secondary-foreground">Quero o plano básico</button>
          </div>
          <div className="relative rounded-3xl border-4 border-accent bg-card p-8 shadow-warm">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-extrabold text-primary-foreground">⭐ MAIS COMPLETO</span>
            <h3 className="font-display text-2xl font-extrabold text-primary">⭐ PLANO COMPLETO</h3>
            <p className="mt-2 text-sm text-muted-foreground">A coleção para explorar todas as categorias de materiais natalinos!</p>
            <p className="mt-6 font-display text-5xl font-extrabold text-primary">R$ 29,90</p>
            <p className="text-sm text-muted-foreground">Pagamento único.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <Check>Coleção de modelos natalinos para imprimir.</Check>
              {modules.map(([t], i) => <Check key={t}>Módulo 0{i + 1} — {t}.</Check>)}
              <li>🎁 Bônus 01 — Coleção de Natal Cristão.</li>
              <li>🎁 Bônus 02 — Guia de Impressão, Corte e Montagem.</li>
              <Check>Recebimento por e-mail após confirmação da compra.</Check>
            </ul>
            <p className="mt-6 font-bold text-secondary">Tenha todos os módulos e bônus em uma única coleção!</p>
            <button className="mt-4 w-full rounded-full bg-primary px-6 py-4 font-extrabold uppercase text-primary-foreground shadow-warm hover:brightness-110">Quero a coleção completa</button>
            <p className="mt-3 text-center text-xs italic text-muted-foreground">Produto digital • Pagamento único • Sem envio físico</p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-3xl border-2 border-dashed border-secondary bg-card p-8 text-center">
          <div className="text-5xl">🔒</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-secondary">Sua compra com 7 dias de garantia</h2>
          <p className="mt-4">Você terá <strong>7 dias de garantia</strong> para solicitar o reembolso, conforme as condições informadas no momento da compra.</p>
          <p className="mt-2 text-muted-foreground">Assim, poderá adquirir seu material com mais tranquilidade.</p>
          <div className="mt-6"><Cta>Quero garantir meu kit de Natal</Cta></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center"><H2>❓ Perguntas frequentes</H2></div>
          <div className="mt-10 space-y-3">
            {faqs.map(([q, a], i) => (
              <div key={q} className="rounded-2xl bg-card">
                <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-secondary">
                  {q}<span className="text-2xl text-primary">{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p className="px-5 pb-5 text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-festive py-20 text-center text-secondary-foreground">
        <div className="mx-auto max-w-3xl px-5">
          <H2 light>🎄 Faça deste Natal uma época ainda mais especial!</H2>
          <div className="mt-6 space-y-1 text-lg opacity-90">
            <p>Uma caixinha preparada com carinho.</p>
            <p>Uma embalagem decorada para acompanhar um chocolate.</p>
            <p>Um cartão com uma mensagem especial.</p>
            <p>Uma sacolinha personalizada para presentear alguém querido.</p>
          </div>
          <p className="mt-6 italic">Às vezes, pequenos detalhes tornam um presente inesquecível.</p>
          <p className="mt-4 font-display text-2xl font-extrabold text-accent">Crie, personalize e compartilhe o carinho do Natal!</p>
          <p className="mt-2">🎁 Cinco módulos e dois bônus especiais para suas criações.</p>
          <div className="mt-8"><Cta variant="light">Quero meu Natal Criativo para Imprimir</Cta></div>
        </div>
      </section>

      <footer className="bg-foreground py-10 text-center text-sm text-background">
        <p className="font-display text-lg font-extrabold">Natal Criativo para Imprimir</p>
        <p className="mt-1 opacity-80">Materiais digitais para imprimir, recortar e montar.</p>
        <p className="opacity-80">Produto digital. Não há envio de produtos físicos.</p>
        <p className="mt-4 opacity-70"><a href="#">Termos de Uso</a> | <a href="#">Política de Privacidade</a> | <a href="#">Suporte</a></p>
      </footer>

      <ExitPopup />
    </main>
  );
}
