const S=["Стратегическое мышление","Решение и judgment","Лидерство и люди","Бизнес и P&L","Коммуникация руководителя","Личная эффективность"];
const q=(id,s,t,c,o,a,e,d=2,terms=[])=>({id,s,t,c,o,a,e,d,terms});
const Q=[
q("st1",S[0],"Цена фокуса","Через две недели запуск. Ресурса хватает на 6 из 14 задач. Что делает руководитель?",2,["Берёт самые лёгкие","Выбирает задачи по желанию команды","Фиксирует outcome, критерии успеха и trade-offs, затем выбирает 6","Откладывает запуск"],"Стратегия начинается с цели и явной цены отказа от альтернатив.","prioritization",2,["outcome","trade-off"]),
q("st2",S[0],"Output ≠ outcome","Команда выпустила 8 функций. Продуктовый показатель не изменился. Что делать?",1,["Попросить ещё функций","Проверить гипотезы, поведение пользователей и связь релизов с outcome","Увеличить velocity","Сменить команду"],"Количество релизов — output. Руководитель проверяет, создали ли они измеримый результат.","output","outcome"]),
q("st3",S[0],"Смена курса","Регулятор изменил правило, и исходная roadmap потеряла половину ценности. Первый шаг?",2,["Продолжать по плану","Сразу отменить всё","Пересобрать assumptions, ограничения и варианты стратегии","Передать решение юристам"],"Стратегический pivot должен опираться на новые вводные, а не на инерцию.","inertia","assumption"]),
q("st4",S[0],"Второй порядок","Новое правило снижает риск, но увеличивает время операции на 20%. Что анализировать?",2,["Только риск","Только SLA","Первичный эффект и последствия для клиентов, экономики, конкурентов и операций","Только мнение compliance"],"Second-order effects часто определяют реальную цену решения.","systems thinking","second-order effect"]),
q("st5",S[0],"North Star","В команде 12 KPI и нет общего приоритета. Что нужно?",1,["Добавить ещё KPI","Выбрать North Star metric и несколько guardrail-метрик","Оставить все равными","Ориентироваться на мнение директора"],"North Star задаёт основной сигнал ценности, guardrails не дают оптимизировать его ценой риска.","metric","North Star metric"]),
q("st6",S[0],"Портфель","Есть три инициативы: высокая ценность/высокий риск, средняя/низкий риск, низкая/низкий риск. Как мыслить портфелем?",2,["Выбрать только безопасные","Сравнить risk-adjusted value, зависимости и стратегические опции","Выбрать самую большую","Делать все одновременно"],"Портфель — это не список проектов, а распределение ограниченного капитала и риска.","portfolio","risk-adjusted value"]),
q("st7",S[0],"Moat","Конкурент может скопировать функцию за месяц. Где искать устойчивое преимущество?",2,["В количестве функций","В данных, distribution, switching costs, network effects или уникальной операционной модели","В красивом UI","В более длинной roadmap"],"Feature parity не создаёт moat сама по себе.","competitive advantage","moat"]),
q("st8",S[0],"Scenario planning","На рынок могут повлиять три регуляторных сценария. Что лучше?",1,["Выбрать один и забыть остальные","Описать сценарии, leading indicators и заранее определить trigger для смены курса","Ждать закона","Сделать три продукта"],"Сценарное планирование связывает неопределённость с конкретными сигналами и действиями.","scenario planning","leading indicator"]),
q("st9",S[0],"Системное ограничение","Продажи требуют ускорения, compliance — дополнительных проверок. Как решить?",2,["Выбрать сторону","Найти constraint системы, варианты redesign процесса и цену каждого trade-off","Увеличить штат обоих","Отложить продукт"],"Системный подход ищет узкое место и меняет архитектуру процесса, а не спорит функциями.","constraint","system constraint"]),
q("st10",S[0],"CEO-level choice","Вам предлагают 20% роста при удвоении операционного риска. Что должен содержать recommendation?",2,["Только прогноз роста","Один слайд с мнением","Value, risk, assumptions, mitigations, reversibility и чёткой рекомендацией","Список всех данных"],"На executive-уровне важно не количество данных, а качество выбора и управляемость downside.","recommendation","downside"]),

q("de1",S[1],"60% данных","Есть 60% данных. Решение обратимо и задержка стоит дорого. Что делать?",2,["Ждать 100%","Решить наугад","Определить information that can change the decision и принять контролируемое решение","Передать начальнику"],"Не вся недостающая информация одинаково ценна. Ищите данные, способные изменить выбор.","decision quality","reversible decision"]),
q("de2",S[1],"Цена бездействия","Ошибка стоит 1 млн, задержка — 100 тыс. в неделю. Что добавить в analysis?",1,["Только вероятность ошибки","Expected loss вместе со стоимостью delay и reversal","Мнение самого опытного","Количество встреч"],"Decision economics включает стоимость действия и бездействия.","opportunity cost","expected loss"]),
q("de3",S[1],"Reversible decision","Команда просит неделю анализа для обратимого решения. Что лучше?",1,["Дать неделю","Принять сейчас с checkpoint и условиями отмены","Запретить анализ","Случайно выбрать"],"Обратимые решения можно принимать быстрее и учиться по фактам.","reversible decision","checkpoint"]),
q("de4",S[1],"Вероятности","Два сценария: 70% × +10 млн и 30% × −20 млн. Какой expected value?",0,["+1 млн","−1 млн","+4 млн","−6 млн"],"Expected value = 0,7×10 − 0,3×20 = +1 млн.","probability",2,["expected value","probability"]),
q("de5",S[1],"Escalation","Когда стоит эскалировать решение Head of Product?",2,["Когда оно неприятное","Когда есть impact за пределами вашего mandate, необратимость или конфликт приоритетов","Когда нет времени","При любой неопределённости"],"Эскалация должна защищать уровень ответственности, а не переносить judgement вверх.","escalation","mandate"]),
q("de6",S[1],"Outcome bias","Рациональное решение привело к плохому результату из-за редкого события. Как оценить?",2,["Назвать решение плохим","Отделить decision quality от outcome и проверить assumptions на момент выбора","Наказать автора","Запретить повтор"],"Хороший процесс может привести к плохому исходу; плохой процесс — к хорошему случайно.","outcome bias","assumption"]),
q("de7",S[1],"Pre-mortem","Перед запуском команда уверена в успехе. Что добавит pre-mortem?",1,["Ещё один статус","Попытку представить, что запуск провалился, и найти причины заранее","Праздник","Ускорение разработки"],"Pre-mortem снижает groupthink и помогает увидеть blind spots.","pre-mortem","groupthink"]),
q("de8",S[1],"Decision log","Зачем фиксировать ключевые решения письменно?",2,["Для контроля людей","Чтобы сохранить context, assumptions, owner и критерий пересмотра","Для отчётности","Чтобы избежать ответственности"],"Decision log создаёт организационную память и делает review объективнее.","decision log","context"]),
q("de9",S[1],"Bayesian update","Новый факт сильно снижает вероятность вашей гипотезы. Что делать?",1,["Игнорировать до конца квартала","Обновить belief и проверить, меняется ли решение","Защитить первоначальную позицию","Попросить другой факт"],"Bayesian thinking означает обновлять вероятность при появлении новой evidence.","bayesian thinking","evidence"]),
q("de10",S[1],"Disagree and commit","Команда не согласна с вашим решением, но после обсуждения решение остаётся за вами. Что делать?",1,["Требовать энтузиазма","Зафиксировать rationale, попросить commitment и установить review point","Поменять решение","Игнорировать мнение"],"Disagree and commit позволяет спорить до решения и синхронно исполнять после него.","leadership","disagree and commit"]),

q("le1",S[2],"Делегирование","Сильный PM приносит вам каждую мелочь. Что делать?",2,["Отвечать на всё","Определить decision boundaries и требовать recommendation перед эскалацией","Запретить вопросы","Забрать проект"],"Delegation — это передача права решения в заданных границах, а не просто задач.","delegation","decision boundary"]),
q("le2",S[2],"High performer","Сильный сотрудник токсичен, но даёт высокий результат. Что делать?",2,["Игнорировать","Показать impact поведения, установить стандарт и план изменения","Уволить сразу","Изолировать"],"Высокая результативность не отменяет культурный и командный impact.","people leadership","high performer"]),
q("le3",S[2],"One-on-one","Какой результат хорошего 1:1?",2,["Руководитель знает детали","Больше задач","Яснее цели, blockers, развитие и самостоятельность","Отчёт"],"1:1 должен увеличивать capability и ownership сотрудника.","coaching","one-on-one"]),
q("le4",S[2],"Ошибка","Сотрудник допустил исправимую ошибку. Что делать?",2,["Публично разобрать","Разобрать root cause, добавить guardrail и сохранить ownership","Забрать задачу","Ничего"],"Сильная команда учится на ошибках и улучшает систему.","psychological safety","guardrail"]),
q("le5",S[2],"Конфликт","Два лидера тянут команду в разные стороны. Первый шаг?",1,["Развести людей","Сделать conflict of goals явным и вернуть разговор к общей цели и decision rights","Выбрать любимого","Передать HR"],"Часто конфликт людей — следствие неясных целей или прав решения.","conflict","decision rights"]),
q("le6",S[2],"Underperformance","Сотрудник системно не выполняет ожидания. Что лучше?",1,["Ждать","Конкретно назвать gap, expectation, support, срок и consequence","Сразу уволить","Делать его работу"],"Performance management требует ясности и follow-through.","performance management","expectation"]),
q("le7",S[2],"Succession","Вы единственный человек, знающий критичный процесс. Что это?",2,["Незаменимость","Организационный риск; нужно создавать succession и knowledge transfer","Преимущество","Нормальная ситуация"],"Senior leader уменьшает key-person risk.","succession","key-person risk"]),
q("le8",S[2],"Hiring","Есть кандидат с сильным CV, но слабым judgement. Что важнее для Head-роли?",1,["Бренд компании","Evidence of judgement, leadership and ability to build systems","Количество лет","Техническая глубина"],"На Head-уровне leverage через людей и решения важнее личного output.","hiring","judgement"]),
q("le9",S[2],"Culture","Команда боится сообщать плохие новости. Какой сигнал дать?",1,["Требовать позитив","Вознаграждать раннюю эскалацию и отделять проблему от обвинения","Усилить отчётность","Сократить встречи"],"Psychological safety не означает отсутствие accountability; она ускоряет обнаружение проблем.","culture","psychological safety"]),
q("le10",S[2],"Operating model","Команда выросла с 8 до 30 человек, но всё ещё зависит от вас. Что менять?",2,["Работать больше","Ввести ownership, interfaces, decision rights, cadence и middle leaders","Сократить команду","Добавить чаты"],"Масштаб требует operating model, а не личного контроля.","scaling","operating model"]),

q("bu1",S[3],"Цена","Цена +10% снижает volume на 5%. Что считать?",1,["Только volume","Revenue, margin, churn, сегменты и lifetime impact","Только выручку","Только конкурентов"],"Pricing — экономическое решение, а не только процент изменения цены.","unit economics","margin"]),
q("bu2",S[3],"Fixed vs variable","Расходы растут быстрее выручки. Что исследовать?",1,["Только зарплаты","Fixed/variable cost, contribution margin и operating leverage","Только маркетинг","Только headcount"],"Структура cost base показывает масштабируемость экономики.","cost structure","operating leverage"]),
q("bu3",S[3],"ROI","Проект A: 30% ROI, высокий риск. B: 18%, низкий риск. Что сравнить?",2,["Всегда A","Всегда B","Risk-adjusted return, timing, downside и strategic value","Только ROI"],"ROI без риска и горизонта неполон.","capital allocation","ROI"]),
q("bu4",S[3],"Driver tree","Прибыль упала. С чего начать?",1,["Сокращать людей","Разложить profit на price, volume, mix, variable и fixed costs","Увеличить продажи","Созвать совет"],"Driver tree превращает абстрактную проблему в набор управляемых рычагов.","profitability","driver tree"]),
q("bu5",S[3],"Unit economics","Новый клиент приносит 12 тыс. gross profit за год, CAC — 9 тыс. Что важно проверить?",2,["Только LTV","Payback, retention, margin stability и cash timing","Только CAC","Только revenue"],"Положительная единичная экономика может быть плохой при долгом payback или слабом retention.","unit economics","payback"]),
q("bu6",S[3],"Cash vs profit","Компания показывает прибыль, но испытывает дефицит cash. Почему?",1,["Прибыль невозможна","Working capital, timing collections/payments, capex или debt service","Только продажи","Только налоги"],"Profit и cash flow отражают разные измерения экономики.","finance","working capital"]),
q("bu7",S[3],"Build vs buy","Внутренняя разработка стоит 30 млн и 9 месяцев; vendor — 8 млн и 2 месяца, но создаёт lock-in. Что делать?",2,["Всегда buy","Сравнить TCO, strategic control, exit cost, security и time-to-value","Всегда build","Выбрать дешевле"],"Build/buy — стратегический и экономический trade-off.","build vs buy","TCO"]),
q("bu8",S[3],"Budget","Бюджет сокращают на 15%. Как действовать руководителю?",1,["Срезать всё на 15%","Разделить must-win, maintain и stop; защитить критичные capabilities","Сократить людей первым","Заморозить продукт"],"Across-the-board cuts часто разрушают стратегические приоритеты.","budget","must-win"]),
q("bu9",S[3],"Sensitivity","Business case зависит от conversion, CAC и volume. Зачем sensitivity analysis?",1,["Для красивого слайда","Понять, какие assumptions сильнее всего меняют economics","Чтобы выбрать лучший сценарий задним числом","Чтобы убрать риск"],"Sensitivity показывает, где uncertainty действительно важна.","business case","sensitivity analysis"]),
q("bu10",S[3],"Portfolio economics","Два продукта дают одинаковую прибыль, но один использует в 5 раз больше капитала. Что сравнить?",2,["Только прибыль","ROIC/capital efficiency, risk и strategic optionality","Только revenue","Количество клиентов"],"Capital efficiency важна там, где ресурс ограничен.","capital efficiency","ROIC"]),

q("co1",S[4],"Executive status","Как сообщить сложный статус CEO?",1,["20 минут деталей","RAG, 2 факта, ключевой риск, решение/ask и next action","Только green","Список задач"],"Executive communication должна быстро передавать signal и требуемое действие.","executive communication","RAG"]),
q("co2",S[4],"Decision architecture","Встреча расползается по деталям. Что сделать?",1,["Дать ещё времени","Зафиксировать decision, options, criteria, owner и deadline","Закрыть встречу","Решить молча"],"Decision architecture превращает обсуждение в управляемый выбор.","meeting","decision architecture"]),
q("co3",S[4],"Ответ «нет»","Как отказать сильному stakeholder?",1,["Невозможно","Сейчас constraint такой-то; могу A к X или B к Y. Что важнее?","Игнорировать","Пообещать"],"Сильный no показывает constraint и предлагает trade-off.","negotiation","stakeholder"]),
q("co4",S[4],"Плохая новость","Обнаружили риск за день до steering committee. Что делать?",2,["Скрыть до решения","Сообщить рано: impact, probability, mitigation и recommendation","Передать junior","Подождать подтверждения 100%"],"Trust растёт, когда руководитель приносит не только проблему, но и управляемый вариант действий.","escalation","mitigation"]),
q("co5",S[4],"Позиция","Вы не согласны с VP. Как построить аргумент?",1,["Доказывать статусом","Shared goal → evidence → trade-offs → recommendation → invite challenge","Сослаться на команду","Промолчать"],"Executive disagreement должен быть про decision quality, а не про статус.","influence","recommendation"]),
q("co6",S[4],"Narrative","Есть 30 слайдов аналитики. Что сделать для Board?",2,["Показать все","Собрать narrative: context, change, implications, choices, recommendation","Убрать графики","Добавить текст"],"Narrative помогает совету понять, почему решение нужно сейчас.","board communication","narrative"]),
q("co7",S[4],"Negotiation","Партнёр просит скидку 20% в обмен на неопределённый будущий объём. Что ответить?",1,["Согласиться","Привязать скидку к измеримому commitment и economics","Отказать сразу","Дать 10%"],"Concession должна обмениваться на конкретную ценность.","negotiation","commitment"]),
q("co8",S[4],"Alignment","После встречи разные руководители по-разному поняли решение. Что было упущено?",1,["Ещё одна встреча","Written decision: what/why/owner/deadline/non-goals","Презентация","Контроль"],"Alignment требует явного shared record.","alignment","non-goal"]),
q("co9",S[4],"Difficult conversation","Сильный руководитель смежного блока регулярно нарушает договорённости. Как начать разговор?",2,["С обвинения","Факт → impact → expectation → request → consequence","Пожаловаться его начальнику","Игнорировать"],"Конкретика снижает защитную реакцию и делает договорённость проверяемой.","feedback","expectation"]),
q("co10",S[4],"One-minute pitch","У вас минута на новый продукт. Что обязательно?",1,["Все функции","Problem, customer, value, economics/scale, ask","История команды","Технологический стек"],"Executive pitch отвечает: зачем, для кого, какой эффект и что нужно решить.","pitch","value proposition"]),

q("ef1",S[5],"Фокус","Вас постоянно отвлекают. Что делать?",1,["Отвечать всем сразу","Создать communication windows и защищённые deep-work blocks","Работать ночью","Отключить всё"],"Executive effectiveness — это управление вниманием как ограниченным ресурсом.","focus","deep work"]),
q("ef2",S[5],"30 задач","В списке 30 задач. Как сократить?",1,["Делать быстрее","Удалить, delegate или defer всё, что не связано с outcomes","Нанять людей","Перенести"],"Сначала меняется scope работы, затем скорость исполнения.","prioritization","delegate"]),
q("ef3",S[5],"Upward delegation","Команда приносит проблему без вариантов. Что спросить?",1,["Почему не знаете?","Какие варианты видишь и что рекомендуешь?","Я решу сам","Напиши подробнее"],"Так вы развиваете judgement команды и снижаете dependency.","delegation","upward delegation"]),
q("ef4",S[5],"Calendar audit","70% календаря — recurring meetings без ясного результата. Что делать?",2,["Посещать эффективнее","Проверить purpose каждой встречи, отменить/делегировать лишнее и изменить cadence","Добавить agenda","Работать вечерами"],"Календарь — операционная модель руководителя.","time management","cadence"]),
q("ef5",S[5],"Energy","Самые сложные решения приходятся на конец дня. Что изменить?",1,["Ускориться","Поставить high-cognition work в peak-energy windows","Отменить решения","Делать ночью"],"Capacity зависит не только от времени, но и от качества внимания.","energy management","high-cognition"]),
q("ef6",S[5],"Leverage","Вы лично исправляете 10 повторяющихся проблем. Что это означает?",2,["Вы незаменимы","Нужно найти system fix, automation, owner или policy","Нужно работать быстрее","Нужно нанять ассистента"],"Повторяемая ручная работа — сигнал отсутствия leverage.","leverage","system fix"]),
q("ef7",S[5],"Escalation load","Вас заваливают вопросами, которые команда может решить сама. Что внедрить?",1,["Не отвечать","Decision matrix + office hours + thresholds for escalation","Больше встреч","Новый чат"],"Правила эскалации переводят поток вопросов в систему.","operating model","decision matrix"]),
q("ef8",S[5],"Weekly review","Что является результатом сильного weekly review?",2,["Список задач","Понимание outcomes, bottlenecks, decisions, risks и следующего фокуса","Отчёт","Количество часов"],"Review должен менять следующий цикл, а не только описывать прошлый.","weekly review","bottleneck"]),
q("ef9",S[5],"Stop doing","Что отличает Head от сильного Senior PM?",2,["Больше часов","Умение перестать делать лично то, что должно работать через систему и людей","Больше задач","Больше встреч"],"Переход к Head — это рост leverage и масштаба ответственности.","leadership scale","leverage"]),
q("ef10",S[5],"Personal operating system","Как строить личную систему управления?",1,["Только to-do list","Цели → priorities → calendar → decision log → review → learning loop","Только календарь","Только OKR"],"Personal operating system соединяет намерения, execution и learning.","personal effectiveness","learning loop"])
];

const G=[
["alignment","Выравнивание","Общее понимание цели, решения, ролей и ожидаемого результата.","Коммуникация руководителя"],
["assumption","Предположение","Условие, которое считается верным при принятии решения, но может оказаться неверным.","Стратегическое мышление"],
["Bayesian thinking","Байесовское мышление","Обновление вероятности гипотезы после появления новой информации.","Решение и judgment"],
["bottleneck","Узкое место","Ограничение системы, которое сильнее всего ограничивает её пропускную способность.","Личная эффективность"],
["business case","Бизнес-кейс","Обоснование инициативы через ценность, затраты, риски, сценарии и ожидаемый эффект.","Бизнес и P&L"],
["capital efficiency","Эффективность капитала","Сколько результата создаётся на единицу вложенного капитала.","Бизнес и P&L"],
["cadence","Ритм управления","Регулярность повторяющихся управленческих процессов: review, planning, sync.","Личная эффективность"],
["commitment","Обязательство","Конкретное обещание сделать определённое действие или достичь результата при заданных условиях.","Коммуникация руководителя"],
["constraint","Ограничение","Фактор, который ограничивает возможные решения или пропускную способность системы.","Стратегическое мышление"],
["decision architecture","Архитектура решения","Явная структура: вопрос, варианты, критерии, decision rights, owner и срок.","Коммуникация руководителя"],
["decision boundary","Граница решения","Заранее определённые рамки, внутри которых сотрудник принимает решение самостоятельно.","Лидерство и люди"],
["decision log","Журнал решений","Запись решения, контекста, assumptions, owner и условий пересмотра.","Решение и judgment"],
["decision rights","Права принятия решений","Кто имеет право принять конкретное решение и кто участвует в обсуждении.","Лидерство и люди"],
["deep work","Глубокая работа","Непрерывная работа высокой когнитивной сложности без постоянных отвлечений.","Личная эффективность"],
["disagree and commit","Не согласен, но поддерживаю исполнение","Принцип: спорить до решения, а после принятия решения синхронно исполнять его.","Решение и judgment"],
["downside","Негативный сценарий","Потенциальный ущерб или неблагоприятный исход решения.","Стратегическое мышление"],
["expected value","Ожидаемая ценность","Средневзвешенный результат сценариев с учётом их вероятностей.","Решение и judgment"],
["fixed cost","Постоянные затраты","Затраты, которые в коротком горизонте мало зависят от объёма деятельности.","Бизнес и P&L"],
["guardrail","Защитное ограничение","Метрика или правило, которое не позволяет оптимизировать одну цель ценой критичного риска.","Стратегическое мышление"],
["high performer","Высокорезультативный сотрудник","Сотрудник, стабильно создающий высокий результат относительно ожиданий роли.","Лидерство и люди"],
["judgement","Управленческое суждение","Способность принимать качественные решения при неполной информации и неоднозначности.","Решение и judgment"],
["leverage","Рычаг масштабирования","Способ увеличить результат без пропорционального увеличения личных усилий или ресурсов.","Личная эффективность"],
["LTV","Lifetime Value","Ожидаемая ценность клиента за весь период отношений с продуктом.","Бизнес и P&L"],
["margin","Маржа","Разница между выручкой и соответствующими затратами; обычно выражается как доля выручки.","Бизнес и P&L"],
["moat","Защитный ров","Устойчивое конкурентное преимущество, которое сложно быстро скопировать.","Стратегическое мышление"],
["North Star metric","Северная звезда","Главная метрика, отражающая долгосрочно создаваемую клиентскую или бизнес-ценность.","Стратегическое мышление"],
["operating leverage","Операционный рычаг","Рост прибыли быстрее выручки при увеличении масштаба за счёт структуры постоянных затрат.","Бизнес и P&L"],
["operating model","Операционная модель","Как устроены роли, процессы, decision rights, взаимодействия и управленческий ритм.","Лидерство и люди"],
["opportunity cost","Альтернативная стоимость","Ценность лучшей возможности, от которой отказались, выбрав другой вариант.","Решение и judgment"],
["outcome","Результат","Измеримое изменение для клиента или бизнеса, ради которого выполняется работа.","Стратегическое мышление"],
["output","Результат деятельности","Непосредственно произведённый артефакт: функция, документ, релиз, задача.","Стратегическое мышление"],
["payback","Срок окупаемости","Время, за которое накопленный денежный эффект покрывает первоначальные вложения.","Бизнес и P&L"],
["pre-mortem","Предварительный разбор провала","Метод: представить, что инициатива уже провалилась, и найти вероятные причины заранее.","Решение и judgment"],
["psychological safety","Психологическая безопасность","Ощущение, что можно сообщать о проблемах, задавать вопросы и спорить без страха наказания за сам факт высказывания.","Лидерство и люди"],
["RAG","Красный/жёлтый/зелёный статус","Краткая система сигналов: red — проблема, amber — риск, green — в норме.","Коммуникация руководителя"],
["reversible decision","Обратимое решение","Решение, которое можно относительно быстро и недорого изменить.","Решение и judgment"],
["risk-adjusted return","Доходность с поправкой на риск","Оценка результата инвестиции с учётом вероятности и масштаба неблагоприятных исходов.","Бизнес и P&L"],
["ROI","Return on Investment","Отношение полученного результата к вложению; показатель эффективности инвестиций.","Бизнес и P&L"],
["ROIC","Return on Invested Capital","Доходность на вложенный капитал; используется для оценки эффективности капитала бизнеса.","Бизнес и P&L"],
["second-order effect","Эффект второго порядка","Последствие решения, возникающее после непосредственного первичного эффекта.","Стратегическое мышление"],
["sensitivity analysis","Анализ чувствительности","Проверка того, как изменение ключевых assumptions влияет на результат бизнес-кейса.","Бизнес и P&L"],
["stakeholder","Заинтересованная сторона","Человек или группа, на которых влияет решение или которые влияют на его принятие.","Коммуникация руководителя"],
["strategic optionality","Стратегическая опциональность","Ценность возможности сохранить несколько будущих вариантов действий при неопределённости.","Стратегическое мышление"],
["TCO","Total Cost of Ownership","Полная стоимость владения решением: покупка, внедрение, эксплуатация, поддержка, изменения и выход.","Бизнес и P&L"],
["trade-off","Компромисс","Ситуация, где улучшение одного параметра требует ухудшения другого.","Стратегическое мышление"],
["unit economics","Юнит-экономика","Экономика одной единицы бизнеса: клиента, заказа, транзакции или другого базового юнита.","Бизнес и P&L"],
["working capital","Оборотный капитал","Средства, связанные с операционным циклом: запасы, дебиторка, кредиторка и т.п.","Бизнес и P&L"]
];

let p=JSON.parse(localStorage.getItem("eg")||"null")||{xp:0,streak:0,lastDay:"",answered:0,correct:0,scores:{},mistakes:{},history:[],achievements:[],schemaVersion:4};
if(p.schemaVersion<4){p.scores={};p.mistakes={};p.history=[];p.achievements=[];p.schemaVersion=4}
S.forEach(s=>{if(p.scores[s]==null)p.scores[s]=0});
const save=()=>localStorage.setItem("eg",JSON.stringify(p));
const esc=x=>String(x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const pct=x=>Math.round(x);
let session=[],i=0,hits=0,mode="daily",duration=30;
let todayKey=()=>new Date().toISOString().slice(0,10);
function level(){return Math.floor(p.xp/250)+1}
function menu(){return '<div class="nav"><button onclick="home()">Главная</button><button onclick="stats()">Статистика</button><button onclick="glossary()">Глоссарий</button><button onclick="achievements()">Достижения</button></div>'}
function home(){
 const list=S.map(s=>'<div class="skill"><button class="secondary skill-btn" data-skill="'+esc(s)+'">'+esc(s)+'</button><div class="score">'+p.scores[s]+'/100</div></div>').join("");
 document.querySelector("#app").innerHTML='<main class="shell">'+menu()+'<div class="brand">EXECUTIVE GYM</div><div class="subtitle">Тренажёр управленческого мышления · Senior PM → Head → Director/VP</div><div class="stats"><div class="stat"><b>УРОВЕНЬ '+level()+'</b><span>'+p.xp+' XP</span></div><div class="stat"><b>🔥 '+p.streak+' дней</b><span>'+p.correct+'/'+p.answered+' верных</span></div></div><div class="card"><b>Ежедневная тренировка</b><p class="muted">Полноценная сессия 30–60 минут. Выбери длительность:</p><div class="duration">'+[30,45,60].map(x=>'<button class="secondary dur" data-d="'+x+'">'+x+' мин</button>').join("")+'</div><button class="primary" id="dailyBtn">Начать тренировку</button></div><button class="boss" onclick="boss()">⚡ BOSS CHALLENGE</button><div class="section-title">ТОЧЕЧНАЯ ТРЕНИРОВКА</div><div class="muted">10 вопросов по выбранному навыку. Система чаще возвращает слабые темы и ошибки.</div>'+list+'<button class="secondary" style="margin-top:14px" onclick="mistakeTraining()">↻ Повторить мои ошибки</button><div class="section-title">УЧЕБНЫЙ СЛОЙ</div><div class="card">После каждого ответа показывается разбор терминов. Полный <b>глоссарий</b> — по алфавиту и учебным блокам.</div><div class="footer">Не учи правильные варианты наизусть. Тренируй judgement: последствия, trade-offs, риск, economics, people и executive communication.</div></main>';
 document.querySelectorAll(".skill-btn").forEach(b=>b.onclick=()=>startSkill(b.dataset.skill));
 document.querySelectorAll(".dur").forEach(b=>b.onclick=()=>{duration=+b.dataset.d;document.querySelectorAll(".dur").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});
 document.querySelector("#dailyBtn").onclick=daily;
}
function chooseQuestions(pool,n){
 let a=pool.slice(),out=[];
 while(out.length<n&&a.length){
   a.sort((x,y)=>((p.scores[x.s]-p.scores[y.s])*1.5)+(y.d-x.d)+((p.mistakes[y.id]||0)-(p.mistakes[x.id]||0))*2);
   let top=Math.min(a.length,Math.max(4,Math.ceil(a.length*.35)));
   out.push(a.splice(Math.floor(Math.random()*top),1)[0]);
 }
 return out;
}
function daily(){mode="daily";let n=duration===30?20:duration===45?30:40;session=chooseQuestions(Q,n);i=0;hits=0;question()}
function startSkill(s){mode=s;session=chooseQuestions(Q.filter(x=>x.s===s),10);i=0;hits=0;question()}
function boss(){mode="boss";session=chooseQuestions(Q.filter(x=>x.d>=3),6);i=0;hits=0;question()}
function mistakeTraining(){let ids=Object.keys(p.mistakes).filter(id=>p.mistakes[id]>0);let pool=Q.filter(x=>ids.includes(x.id));if(!pool.length){alert("Пока нет ошибок для повторения. Они появятся после первых тренировок.");return}mode="mistakes";session=chooseQuestions(pool,Math.min(15,pool.length));i=0;hits=0;question()}
function termHtml(q){if(!q.terms.length)return"";let rows=q.terms.map(t=>{let g=G.find(x=>x[0].toLowerCase()===t.toLowerCase());return g?'<div class="term"><b>'+esc(g[1])+'</b><span>'+esc(g[2])+'</span></div>':""}).join("");return rows?'<div class="terms"><div class="terms-title">Термины из этого вопроса</div>'+rows+'</div>':""}
function question(){
 let q=session[i],progress=Math.round(i/session.length*100);
 document.querySelector("#app").innerHTML='<main class="shell"><div class="topbar"><button class="back" onclick="home()">← Назад</button><b>'+esc(mode==="daily"?"ЕЖЕДНЕВНАЯ":mode==="boss"?"BOSS CHALLENGE":mode==="mistakes"?"ОШИБКИ":"ТОЧЕЧНАЯ")+'</b></div><div class="progress"><i style="width:'+progress+'%"></i></div><div class="question-no">'+(i+1)+' / '+session.length+' · '+esc(q.s)+' · Level '+q.d+'</div><div class="question-title">'+esc(q.t)+'</div><div class="card scenario">'+esc(q.c)+'</div><div class="instruction">Выбери действие руководителя.</div><div id="opts">'+q.o.map((o,n)=>'<button class="option" data-n="'+n+'">'+(n+1)+'. '+esc(o)+'</button>').join("")+'</div></main>';
 document.querySelectorAll(".option").forEach(b=>b.onclick=()=>choose(+b.dataset.n));
}
function choose(n){
 let q=session[i],ok=n===q.a;if(ok)hits++;
 p.scores[q.s]=Math.max(0,Math.min(100,p.scores[q.s]+(ok?4:-3)));
 p.xp+=ok?12:4;p.answered++;if(ok)p.correct++;else p.mistakes[q.id]=(p.mistakes[q.id]||0)+1;
 save();
 document.querySelectorAll(".option").forEach((b,k)=>{b.disabled=true;if(k===q.a)b.classList.add("correct");if(k===n&&k!==q.a)b.classList.add("wrong")});
 document.querySelector("#opts").insertAdjacentHTML("afterend",'<div class="feedback card"><h3>'+(ok?"✓ Верно":"✕ Разбор решения")+'</h3><p>'+esc(q.e)+'</p><div class="error-tag">'+(ok?"Навык подтверждён":"Ошибка: "+esc(q.id))+'</div></div>'+termHtml(q)+'<button class="primary" style="margin-top:12px" id="nextBtn">'+(i+1<session.length?"Следующее":"Завершить")+'</button>');
 document.querySelector("#nextBtn").onclick=i+1<session.length?next:finish;
}
function next(){i++;question()}
function finish(){
 let now=todayKey(),type=mode==="daily"?"daily":mode==="boss"?"boss":mode==="mistakes"?"mistakes":"skill";
 p.history.push({date:now,type,skill:type==="skill"?mode:null,total:session.length,correct:hits,xp:hits*12+(session.length-hits)*4});
 p.history=p.history.slice(-90);
 if(type==="daily"&&p.lastDay!==now){let d=new Date();d.setDate(d.getDate()-1);let prev=d.toISOString().slice(0,10);p.streak=p.lastDay===prev?p.streak+1:1;p.lastDay=now}
 checkAchievements();save();
 let score=Math.round(hits/session.length*100),xp=hits*12+(session.length-hits)*4;
 document.querySelector("#app").innerHTML='<main class="shell">'+menu()+'<div class="brand">'+(mode==="boss"?"BOSS CHALLENGE ЗАВЕРШЁН":mode==="daily"?"ДЕНЬ ЗАВЕРШЁН":"ТРЕНИРОВКА ЗАВЕРШЕНА")+'</div><div class="bigxp">+'+xp+' XP</div><div class="result">'+hits+' из '+session.length+' · '+score+'%</div><div class="card"><b>Профиль обновлён</b><p class="muted">Слабые навыки и ошибочные вопросы теперь получают больший вес в следующих тренировках.</p></div>'+(mode==="boss"?'<div class="card boss-result">Boss Challenge — уровень Director/VP. В следующих версиях здесь появятся ветвящиеся кейсы и итоговая оценка judgement.</div>':"")+'<button class="primary" onclick="'+(mode==="daily"?"home()":mode==="boss"?"home()":"startSkill("+JSON.stringify(mode)+")")+'">'+(mode==="daily"||mode==="boss"||mode==="mistakes"?"Вернуться к главной":"Повторить этот навык")+'</button></main>';
}
function stats(){
 let days=[...Array(7)].map((_,k)=>{let d=new Date();d.setDate(d.getDate()-(6-k));return d.toISOString().slice(0,10)});
 let rows=days.map(d=>{let a=p.history.filter(x=>x.date===d),n=a.reduce((s,x)=>s+x.total,0),c=a.reduce((s,x)=>s+x.correct,0);return '<div class="statrow"><b>'+d.slice(5)+'</b><span>'+n+' вопросов · '+(n?Math.round(c/n*100):0)+'%</span></div>'}).join("");
 let total=p.history.reduce((s,x)=>s+x.total,0),acc=total?Math.round(p.history.reduce((s,x)=>s+x.correct,0)/total*100):0;
 document.querySelector("#app").innerHTML='<main class="shell">'+menu()+'<div class="brand">НЕДЕЛЬНАЯ СТАТИСТИКА</div><div class="stats"><div class="stat"><b>'+total+'</b><span>вопросов за 7 дней</span></div><div class="stat"><b>'+acc+'%</b><span>точность</span></div></div><div class="card"><div class="section-title">ПО ДНЯМ</div>'+rows+'</div><div class="section-title">НАВЫКИ</div>'+S.map(s=>'<div class="statrow"><b>'+esc(s)+'</b><span>'+p.scores[s]+'/100</span></div>').join("")+'<div class="section-title">ОШИБКИ</div><div class="card">'+Object.entries(p.mistakes).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([id,n])=>{let q=Q.find(x=>x.id===id);return q?'<div class="statrow"><span>'+esc(q.t)+'</span><b>'+n+'×</b></div>':""}).join("")+'</div></main>';
}
function checkAchievements(){
 let a=new Set(p.achievements);
 const add=(id,name)=>{if(!a.has(id))a.add(id)};
 if(p.answered>=1)add("first","Первое решение");
 if(p.answered>=50)add("50","50 решений");
 if(p.answered>=100)add("100","100 решений");
 if(p.streak>=3)add("streak3","Серия 3 дня");
 if(p.streak>=7)add("streak7","Серия 7 дней");
 if(p.correct>=50)add("master50","50 правильных решений");
 if(p.history.some(x=>x.type==="boss"))add("boss","Первый Boss Challenge");
 if(S.every(s=>p.scores[s]>=50))add("balanced","Сбалансированный профиль");
 p.achievements=[...a];
}
function achievements(){
 checkAchievements();
 let all=[["first","Первое решение","Ответь на первый вопрос"],["50","50 решений","Реши 50 вопросов"],["100","100 решений","Реши 100 вопросов"],["streak3","Серия 3 дня","Тренируйся 3 дня подряд"],["streak7","Серия 7 дней","Тренируйся 7 дней подряд"],["master50","50 правильных","Дай 50 правильных ответов"],["boss","Boss Challenge","Пройди первый Boss Challenge"],["balanced","Баланс","Достигни 50/100 во всех навыках"]];
 document.querySelector("#app").innerHTML='<main class="shell">'+menu()+'<div class="brand">ДОСТИЖЕНИЯ</div>'+all.map(x=>'<div class="achievement '+(p.achievements.includes(x[0])?"earned":"")+'"><b>'+(p.achievements.includes(x[0])?"✓ ":"○ ")+esc(x[1])+'</b><span>'+esc(x[2])+'</span></div>').join("")+'</main>';
}
function glossary(){
 let groups={};G.forEach(g=>(groups[g[3]]??=[]).push(g));
 let html=G.slice().sort((a,b)=>a[1].localeCompare(b[1],"ru")).map(g=>'<div class="gloss"><b>'+esc(g[1])+'</b><span>'+esc(g[2])+'</span><small>'+esc(g[3])+'</small></div>').join("");
 document.querySelector("#app").innerHTML='<main class="shell">'+menu()+'<div class="brand">ГЛОССАРИЙ</div><div class="subtitle">Определения всех терминов, используемых в тренажёре.</div><input class="search" id="gs" placeholder="Поиск термина или темы"><div id="glossaryList">'+html+'</div></main>';
 document.querySelector("#gs").oninput=e=>{let v=e.target.value.toLowerCase();document.querySelectorAll(".gloss").forEach(x=>x.style.display=x.innerText.toLowerCase().includes(v)?"block":"none")};
}
home();