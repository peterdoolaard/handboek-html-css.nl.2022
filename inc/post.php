<?php
if (array_key_exists('voornaam', $_POST)) {
  $voornaam = htmlspecialchars($_POST['voornaam']);
} else {
  $voornaam = '';
}
if (array_key_exists('achternaam', $_POST)) {
  $achternaam = htmlspecialchars($_POST['achternaam']);
} else {
  $achternaam = '';
}
if (array_key_exists('geboortedatum', $_POST)) {
  $geboortedatum = htmlspecialchars($_POST['geboortedatum']);
} else {
  $geboortedatum = '';
}
if (array_key_exists('huisnummer', $_POST)) {
  $huisnummer = htmlspecialchars($_POST['huisnummer']);
} else {
  $huisnummer = '';
}
if (array_key_exists('postcode', $_POST)) {
  $postcode = htmlspecialchars($_POST['postcode']);
} else {
  $postcode = '';
}
if (array_key_exists('straatnaam', $_POST)) {
  $straatnaam = htmlspecialchars($_POST['straatnaam']);
} else {
  $straatnaam = '';
}
if (array_key_exists('woonplaats', $_POST)) {
  $woonplaats = htmlspecialchars($_POST['woonplaats']);
} else {
  $woonplaats = '';
}
if (array_key_exists('email', $_POST)) {
  $email = htmlspecialchars($_POST['email']);
} else {
  $email = '';
}
if (array_key_exists('telefoon', $_POST)) {
  $telefoon = htmlspecialchars($_POST['telefoon']);
} else {
  $telefoon = '';
}
if (array_key_exists('iban', $_POST)) {
  $iban = htmlspecialchars($_POST['iban']);
} else {
  $iban = '';
}
$fmt = datefmt_create(
    'nl_NL',
    IntlDateFormatter::LONG,
    IntlDateFormatter::NONE,
    'Europe/Amsterdam',
    IntlDateFormatter::GREGORIAN
);
?>
<h2>Reactie van de server</h2>
<div>
<?php echo '<p>Hartelijk dank voor je aanmelding, ' . $voornaam . ' ' . $achternaam ?>
<?php echo ($geboortedatum) ? ', geboren op ' . datefmt_format($fmt, strtotime($geboortedatum)) . '.</p>' : '.</p>' ?>
<?php echo '<p>Je adres is ' . $straatnaam . ' ' . $huisnummer . ' ' . $postcode . ' ' . $woonplaats . '.</p>' ?>
<?php echo ($iban) ? '<p>Het abonnementsgeld wordt afgeschreven van de bankrekening met IBAN ' . $iban . '.</p>' :
'<p>Je hebt geen bankrekeningnummer ingevuld.' ?>
<?php echo ($email) ? '<p>We communiceren via je e-mailadres ' . $email . '.</p>' : '<p>We hebben geen e-mailadres
van je ontvangen.</p>' ?>
<?php echo ($telefoon) ? 'In een voorkomend geval bellen we je op het telefoonnummer ' . $telefoon . '.</p>' : '<p>Je
 telefoonnummer is bij ons niet bekend.</p>' ?>
 <p>Terug naar <a class="link-text" onclick="window.history.back()">het formulier</a>.</p>
 <p>Terug naar <a class="link-text" href="/voorbeelden.html">de voorbeelden</a>.</p>
</div>
<h2>Voorbeeld van een PHP-script op de server</h2>
<p>Uw webserver of hostingpakket moet PHP ondersteunen om zelf formulieren te kunnen verwerken. Geef het attribuut
<code>action</code> van
het formulier de URL van het verwerkende script.</p>
<p>Het eerste deel van het script haalt de waarden uit de ingestuurde formuliervelden. Het tweede deel zet met
<code>echo</code> die waarden in de HTML. Daarvoor is een eenregelige if-constructie gebruikt, een ternary:</br>
<code> $variabele ? code als $variabele true is : code als $variabele false is;</code><br>
Een leeg formulierveld geeft dus een andere uitvoer dan een ingevuld formulierveld.</p>

<pre><code class="language-php">
// verwerking
&lt;?php
if (array_key_exists('voornaam', $_POST)) {
  $voornaam = htmlspecialchars($_POST['voornaam']);
} else {
  $voornaam = '';
}
if (array_key_exists('achternaam', $_POST)) {
  $achternaam = htmlspecialchars($_POST['achternaam']);
} else {
  $achternaam = '';
}
if (array_key_exists('geboortedatum', $_POST)) {
  $geboortedatum = htmlspecialchars($_POST['geboortedatum']);
} else {
  $geboortedatum = '';
}
if (array_key_exists('huisnummer', $_POST)) {
  $huisnummer = htmlspecialchars($_POST['huisnummer']);
} else {
  $huisnummer = '';
}
if (array_key_exists('postcode', $_POST)) {
  $postcode = htmlspecialchars($_POST['postcode']);
} else {
  $postcode = '';
}
if (array_key_exists('straatnaam', $_POST)) {
  $straatnaam = htmlspecialchars($_POST['straatnaam']);
} else {
  $straatnaam = '';
}
if (array_key_exists('woonplaats', $_POST)) {
  $woonplaats = htmlspecialchars($_POST['woonplaats']);
} else {
  $woonplaats = '';
}
if (array_key_exists('email', $_POST)) {
  $email = htmlspecialchars($_POST['email']);
} else {
  $email = '';
}
if (array_key_exists('telefoon', $_POST)) {
  $telefoon = htmlspecialchars($_POST['telefoon']);
} else {
  $telefoon = '';
}
if (array_key_exists('iban', $_POST)) {
  $iban = htmlspecialchars($_POST['iban']);
} else {
  $iban = '';
}
$fmt = datefmt_create(
    'nl_NL',
    IntlDateFormatter::LONG,
    IntlDateFormatter::NONE,
    'Europe/Amsterdam',
    IntlDateFormatter::GREGORIAN
);
?&gt;
// uitvoer
&lt;?php echo '&lt;p&gt;Hartelijk dank voor je aanmelding, ' . $voornaam . ' ' . $achternaam ?&gt;
&lt;?php echo ($geboortedatum) ? ', geboren op ' . datefmt_format($fmt, strtotime($geboortedatum)) . '.&lt;/p&gt;' : '.&lt;/p&gt;' ?&gt;
&lt;?php echo '&lt;p&gt;Je adres is ' . $straatnaam . ' ' . $huisnummer . ' ' . $postcode . ' ' . $woonplaats . '.&lt;/p&gt;' ?&gt;
&lt;?php echo ($iban) ? '&lt;p&gt;Het abonnementsgeld wordt afgeschreven van de bankrekening met IBAN ' . $iban . '.&lt;/p&gt;' :
'&lt;p&gt;Je hebt geen bankrekeningnummer ingevuld.' ?&gt;
&lt;?php echo ($email) ? '&lt;p&gt;We communiceren via je e-mailadres ' . $email . '.&lt;/p&gt;' : '&lt;p&gt;We hebben geen e-mailadres
van je ontvangen.&lt;/p&gt;' ?&gt;
&lt;?php echo ($telefoon) ? 'In een voorkomend geval bellen we je op het telefoonnummer ' . $telefoon . '.&lt;/p&gt;' : '&lt;p&gt;Je
 telefoonnummer is bij ons niet bekend.&lt;/p&gt;' ?&gt;
</code>
</pre>
