/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

export default function LoadingView() {
  
  return (
    <div class="card" aria-hidden="true">
        <img src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" class="card-img-top" alt="placehoders image"/>
        <div class="card-body">
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
            </p>
            <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
        </div>
    </div>
  )
}

