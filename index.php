<?php
/** Thin wrapper — delegasi ke router terpusat (modul dashboard). */
require_once __DIR__ . '/config/app.php';
require_once __DIR__ . '/config/router.php';

rapor_dispatch('dashboard');
