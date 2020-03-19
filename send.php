<?php 
if (isset($_POST['form__btn'])) {

if (isset($_POST['inner__select'])) {
  $inner__select = filter_var($_POST['inner__select'], FILTER_SANITIZE_STRING); 
  }

  if (isset($_POST['section2__input'])) {
  $section2__input = filter_var($_POST['section2__input'], FILTER_SANITIZE_STRING); 
  } 

  if (isset($_POST['section4__input'])) {
  $section4__input = filter_var($_POST['section4__input'], FILTER_SANITIZE_STRING); 
  } 

 if (isset($_POST['sect3r'])) {
  $sect3r = filter_var($_POST['sect3r'], FILTER_SANITIZE_STRING); 
  } 
  
if (isset($_POST['sect5r'])) {
  $sect5r = filter_var($_POST['sect5r'], FILTER_SANITIZE_STRING); 
  } 

 if (isset($_POST['sect6r'])) {
  $sect6r = filter_var($_POST['sect6r'], FILTER_SANITIZE_STRING); 
  } 

  if (isset($_POST['sect7r'])) {
  $sect7r = filter_var($_POST['sect7r'], FILTER_SANITIZE_STRING); 
  }

   if (isset($_POST['name1'])) {
  $name1 = filter_var($_POST['name1'], FILTER_SANITIZE_STRING); 
  }

  if (isset($_POST['phone1'])) {
  $name1 = filter_var($_POST['phone1'], FILTER_SANITIZE_STRING); 
  } 
}
?>