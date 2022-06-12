<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aanmeldingsformulier | Voorbeeld bij Handboek HTMl 5 en CSS</title>
  <?php if (strtoupper($_SERVER['REQUEST_METHOD']) === "GET") { ?>
    <link rel="stylesheet" href="/css/form-aanmelden.css">
  <?php } elseif (strtoupper($_SERVER['REQUEST_METHOD']) === "POST") { ?>
    <link rel="stylesheet" href="/css/form-aanmelden-server.css">
    <link rel="stylesheet" href="/css/prism-php.css">
    <script src="/js/prism-php.js"></script>
  <?php } ?>
</head>
<body>
<div class="container">
  <div class="client">
    <h1>Voorbeeld aanmeldings<wbr>formulier</h1>
    <p>Dit is een voorbeeld van een aanmeldingsformulier, bijvoorbeeld voor een klantaccount. Bedenk dat op het
    verzamelen van persoonsinformatie de AVG van toepassing is, de Algemene verordening gegevensbescherming. Kijk voor
    informatie op de website van de <a href="https://autoriteitpersoonsgegevens
    .nl/nl/onderwerpen/avg-europese-privacywetgeving">Autoriteit Persoonsgegevens</a>.</p>
    <p>De gegevens die u hier invoert, worden niet opgeslagen. Er is geen koppeling met een database.</p>
    <p>Bij het telefoonnumer, de postcode, het e-mailadres en het IBAN zijn reguliere expressies gebruikt om foute
    invoer te voorkomen. Controle van de invoer op de server blijft noodzakelijk, vooral om kwaardaardige code te onderscheppen.</p>
    <p>De met een rood sterretje gemarkeerde velden zijn vereist om het formulier te kunnen verzenden.</p>
    <p>Het formulier wordt verwerkt door een PHP-script op de server. Na het verzenden ziet u op deze
    pagina het antwoord van de server en een voorbeeld van een verwerkingsscript.</p>
     <p>Terug naar <a class="link-text" href="/voorbeelden.html">de voorbeelden</a>.</p>
  </div>
  <main>
