import { Component, signal, AfterViewInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('angular-admin1');
  ngAfterViewInit(): void {
    try {
      const adminlte = (window as any).adminlte || (window as any).AdminLTE || (window as any).default?.adminlte;
      console.debug('App.ngAfterViewInit: adminlte present?', !!adminlte, adminlte?.PushMenu);
      const Defaults = { sidebarBreakpoint: 992 };

      if (adminlte && adminlte.PushMenu) {
        const sidebar = document.querySelector('.app-sidebar');
        console.debug('App: sidebar element found?', !!sidebar);
        if (sidebar) {
          const data = new adminlte.PushMenu(sidebar, Defaults);
          data.init();
          window.addEventListener('resize', () => data.init());
          console.debug('App: AdminLTE PushMenu initialized');
        }
        // attach simple toggle handlers in case data-api missed them
        document.querySelectorAll('[data-lte-toggle="sidebar"]').forEach(btn => {
          if ((btn as any).__lteBound) return;
          (btn as any).__lteBound = true;
          btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            const b = (ev.currentTarget as HTMLElement).closest('[data-lte-toggle="sidebar"]') as HTMLElement;
            if (b) {
              const d = new adminlte.PushMenu(b, Defaults);
              d.toggle();
            }
          });
        });
      }
      else {
        console.warn('AdminLTE not available — adding lightweight fallback toggle');
        // lightweight fallback: toggle body classes so sidebar responds visually
        document.querySelectorAll('[data-lte-toggle="sidebar"]').forEach(btn => {
          if ((btn as any).__lteFallbackBound) return;
          (btn as any).__lteFallbackBound = true;
          btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            const body = document.body;
            if (body.classList.contains('sidebar-open')) {
              body.classList.remove('sidebar-open');
              body.classList.add('sidebar-collapse');
            } else {
              body.classList.remove('sidebar-collapse');
              body.classList.add('sidebar-open');
            }
          });
        });
      }
    }
    catch (e) {
      console.error('AdminLTE init error in App.ngAfterViewInit', e);
    }
  }
}
